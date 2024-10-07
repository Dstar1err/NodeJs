import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

mongoose.connect(process.env.DB_URL).then(() => {

})