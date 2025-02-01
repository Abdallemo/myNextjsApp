import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    likes:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now}
})

const posts = mongoose.models.posts || mongoose.model('posts',postSchema);


export default posts;