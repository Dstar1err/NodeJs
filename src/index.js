import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import { UserRouter } from "./express/routers/user.js"
import { initialize } from "express-openapi";

const app = express()

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected:")
    initialize({
        app,
        docsPath: "/doc",
        paths: "./doc/specs",
        exposeApiDocs: (process.env.ENV_MODE !== "production"),
        apiDoc: "./doc/api-definition-base.yml"
    });

    app.listen(process.env.EXPRESS_PORT, (err) => {
        console.log("Server running at http://localhost:3000/ !")
    })

    app.use("/users", UserRouter)
}).catch((err) => {
    console.log("Mongoose Error:", err)
})