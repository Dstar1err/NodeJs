import express from "express"
export const PostRouter = express.Router()

import {getAllPost, getOnePost, addPost, updatePost, deletePost} from "../controllers/post.js";
import {addComment} from "../controllers/comment.js";


PostRouter.use(express.json())

PostRouter.post('/:id/comments', addComment);
PostRouter.get('/', getAllPost);
PostRouter.get('/:id', getOnePost);
PostRouter.post('/', addPost);
PostRouter.put('/:id', updatePost);
PostRouter.delete('/:id', deletePost);
