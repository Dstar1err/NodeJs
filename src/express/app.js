import express from "express"

import { UserRouter } from "./routers/user.js"
import { PostRouter } from "./routers/post.js"
import { CommentRouter } from "./routers/comment.js"
import { LikeRouter } from "./routers/like.js"
import swaggerUiExpress from "swagger-ui-express";
import swaggerDoc from "../../doc/swagger_doc.json" assert { type: 'json' };

export const app = express()

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));
app.use("/users", UserRouter)
app.use("/posts", PostRouter)
app.use("/comments", CommentRouter)
app.use("/posts", LikeRouter)