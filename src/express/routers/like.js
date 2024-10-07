import express from "express"
export const LikeRouter = express.Router()

import {getAllLike, getUserLike, addLike , deleteLike} from "../controllers/like.js";

LikeRouter.use(express.json())

LikeRouter.get('/:postId/likes', getAllLike);
LikeRouter.get('/:userId/likes', getUserLike);
LikeRouter.post('/:id/likes', addLike);
LikeRouter.delete('/:postId/likes', deleteLike);
