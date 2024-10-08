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