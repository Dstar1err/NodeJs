import express from "express"
export const LikeRouter = express.Router()

import {getAllLike, getUserLike, addLike, updateLike, deleteLike} from "../controllers/like.js";
import {addComment} from "../controllers/comment.js";


LikeRouter.use(express.json())

LikeRouter.get('/:postId/likes', getAllLike);
LikeRouter.get('/:userId/likes', getUserLike);
LikeRouter.post('/:postId/likes', addLike);
LikeRouter.delete('/:postId/likes', deleteLike);
