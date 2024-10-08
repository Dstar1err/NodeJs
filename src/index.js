import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import { UserRouter } from "./express/routers/user.js"
import { PostRouter } from "./express/routers/post.js"
import { CommentRouter } from "./express/routers/comment.js"
import { LikeRouter } from "./express/routers/like.js"
import swaggerUiExpress from "swagger-ui-express";
import swaggerDoc from "../doc/swagger_doc.json" assert { type: 'json' };

export const app = express()

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc));

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected:")

    app.listen(process.env.EXPRESS_PORT, (err) => {
        console.log("Server running at http://localhost:3000/ !")
    })

    app.use("/users", UserRouter)
    app.use("/posts", PostRouter)
    app.use("/comments", CommentRouter)
    app.use("/posts", LikeRouter)
}).catch((err) => {
    console.log("Mongoose Error:", err)
})