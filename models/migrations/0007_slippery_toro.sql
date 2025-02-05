CREATE TABLE "postLikes" (
	"id" uuid,
	"postId" uuid,
	"liked" boolean DEFAULT false
);
--> statement-breakpoint
ALTER TABLE "postLikes" ADD CONSTRAINT "postLikes_postId_posts_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "postLikes" ADD CONSTRAINT "postLikes_id_user_id_fk" FOREIGN KEY ("id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "likes";