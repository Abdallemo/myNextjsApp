ALTER TABLE "posts" RENAME COLUMN "author_email" TO "authorId";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_author_email_user_email_fk";
--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_user_email_fk" FOREIGN KEY ("authorId") REFERENCES "public"."user"("email") ON DELETE cascade ON UPDATE no action;