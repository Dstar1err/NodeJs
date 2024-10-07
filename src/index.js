import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import { UserRouter } from "./express/routers/user.js"
import PostRouter from "./express/routers/post"
import CommentRouter from "./express/routers/comment.js"


const app = express()

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected:")
}).catch((err) => {
    console.log("Mongoose Error:", err)
})

app.use("/users", UserRouter)
app.use("/posts", PostRouter)
app.use("/comments", CommentRouter)

app.listen(process.env.EXPRESS_PORT, (err) => {
    console.log("Server running at http://localhost:3000/ !")
})

app.use("/users", UserRouter)