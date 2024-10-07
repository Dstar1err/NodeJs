

import express from "express"

import {addComment, deleteComment, updateComment} from "../controllers/comment.js";

export const CommentRouter = express.Router()

CommentRouter.use(express.json())


CommentRouter.put('/:id', updateComment);
CommentRouter.delete('/:id', deleteComment);


