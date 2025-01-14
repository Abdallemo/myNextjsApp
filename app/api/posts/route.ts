import Posts from "@/models/posts";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect("mongodb://localhost/mydatabase");
};

export async function GET():Promise<NextResponse> {
    await connectMongoDB();
    const post = await Posts.find();
    return NextResponse.json(post);

}
export async function POST(req: Request) {
    await connectMongoDB();
    try {

        const { title, content } =  await req.json();
        if (!title || !content) {
            return NextResponse.json(
                { message: "Title and content are required" },
                { status: 400 }
            );
        }

        const newPost = new Posts({
            title,
            content,
        });

       
        await newPost.save();

        return NextResponse.json(
            { message: "Post created successfully!", posts: newPost },
            { status: 201 }
        );
    } catch (error) {
        


        console.error("Error creating post: ", error);
        return NextResponse.json(
            { message: "Failed to create post", error: error.message },
            { status: 500 }
        );
    }
}
export async function DELETE(req:NextRequest) {
    try {
        
        const {_id} =await req.json();

        if (!_id) {
            return NextResponse.json(
                { message: "Post ID is required" },
                { status: 400 }
            );
        }
        const deletPost = await Posts.findByIdAndDelete(_id);

        if (!deletPost) {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Post deleted successfully", post: deletPost },
            { status: 200 }
        );

    } catch (error) {
        
        console.error("Error deleting post: ", error);
        return NextResponse.json(
            { message: "Failed to delete post", error: error.message },
            { status: 500 }
        );

    }
}       