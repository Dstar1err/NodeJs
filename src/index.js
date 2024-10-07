import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

mongoose.connect(process.env.DB_URL).then(() => {

})

app.listen(process.env.EXPRESS_PORT, (err) => {
    console.log("Server running at http://localhost:3000/ !")
})