import express from "express"
import { UserRegister, UserLogin, UserGet, UserPut, UserDelete } from "../controllers/user.js"
import { User } from "../../database/models/user.js";
import { hashSync } from "bcrypt";

const UserRouter = express.Router()

UserRouter.use(express.json())

UserRouter.post("/register", (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password
    if (email === undefined 
        || username === undefined
        || password === undefined) {
        res.status(400).send("Error")
        return
    }
    let user = new User({
        username: username,
        email: email,
        password: hashSync()
    })
})
UserRouter.post("/login", UserLogin)
UserRouter.get("/:id", UserGet)
UserRouter.put("/:id", UserPut)
UserRouter.delete("/:id", UserDelete)