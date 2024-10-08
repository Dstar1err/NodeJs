import { app } from "./express/app.js"
import mongoose from "mongoose"

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected:")
    app.listen(process.env.EXPRESS_PORT, (err) => {
        console.log("Server running at http://localhost:3000/ !")
    })
}).catch((err) => {
    console.log("Mongoose Error:", err)
})