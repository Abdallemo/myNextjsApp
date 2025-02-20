CREATE TYPE "public"."role" AS ENUM('ADMIN', 'BASIC');--> statement-breakpoint
CREATE TABLE "categoryTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "postCatagory" (
	"postId" uuid NOT NULL,
	"catagoryId" uuid NOT NULL,
	CONSTRAINT "postCatagory_postId_catagoryId_pk" PRIMARY KEY("postId","catagoryId")
);
--> statement-breakpoint
CREATE TABLE "postLikes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"postId" uuid,
	"userId" varchar,
	"liked" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"postTitle" varchar NOT NULL,
	"content" varchar NOT NULL,
	"authorId" varchar NOT NULL,
	"avarageRating" real DEFAULT 0,
	"createAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "prefrences" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"emailUpdates" boolean DEFAULT false NOT NULL,
	"userId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer,
	"github_id" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"userRole" "role" DEFAULT 'BASIC' NOT NULL,
	CONSTRAINT "user_github_id_unique" UNIQUE("github_id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "postCatagory" ADD CONSTRAINT "postCatagory_postId_posts_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postCatagory" ADD CONSTRAINT "postCatagory_catagoryId_categoryTable_id_fk" FOREIGN KEY ("catagoryId") REFERENCES "public"."categoryTable"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postLikes" ADD CONSTRAINT "postLikes_postId_posts_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "postLikes" ADD CONSTRAINT "postLikes_userId_user_email_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("email") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_user_email_fk" FOREIGN KEY ("authorId") REFERENCES "public"."user"("email") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prefrences" ADD CONSTRAINT "prefrences_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;