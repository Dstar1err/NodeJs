import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
text: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

export const Comment = mongoose.model("Comment", CommentSchema)

