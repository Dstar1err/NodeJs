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

import multer from "multer"
const upload = multer({dest: "./uploads"})




import http from "node:http";
import { Server } from "socket.io";

const server = http.createServer(app)

const io = new Server(server)

io.on("connection",  (socket) => {
    console.log("Made socket connection")

    socket.on("chat", (message) => {
        console.log("message dd: " , message)

        io.emit("chat", message)
    })

})

server.listen(3001)

app.post("/upload", upload.single("file"), (req, res) => {
    console.log("req file", req.file)
    res.send("Ok")
})

