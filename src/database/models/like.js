import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({

  like: {
      type:Boolean,
      unique: true
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
  liked_at: {
        type: Date,
        default: Date.now
    }
})

export const Like = mongoose.model("Like", likeSchema)

