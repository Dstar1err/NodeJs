

import express from "express"

import {deleteComment, getAllComment, updateComment} from "../controllers/comment.js";


export const CommentRouter = express.Router()

CommentRouter.use(express.json())
CommentRouter.get('/', getAllComment);
CommentRouter.put('/:id', updateComment);
CommentRouter.delete('/:id', deleteComment);


