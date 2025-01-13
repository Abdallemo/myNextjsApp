import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

const posts = mongoose.models.Posts || mongoose.model('Posts',postSchema);


export default posts;