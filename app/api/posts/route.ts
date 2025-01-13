import Posts from "@/models/posts";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect("mongodb://localhost/mydatabase");
};


export async function GET() {
    await connectMongoDB();
    const post = await Posts.find();
    return NextResponse.json(post);

}
export async function POST(req: Request) {
    await connectMongoDB();
    try {
        const requestdData = await req.json();
        console.log('here the sent data :' + requestdData);

        const { title, content } = await req.json();
        if (!title || !content) {
            return NextResponse.json({ message: 'Title and content are required',error: error.message }, { status: 400 })

        }

        const newPost = new Posts({
            title,
            content
        })

        await newPost.save();
        return NextResponse.json({ message: 'Post created successfully!', posts: newPost }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to create post", error: error }, { status: 500 });
    }


}
