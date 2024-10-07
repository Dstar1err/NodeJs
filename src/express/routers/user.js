import express from "express"
import { UserRegister, UserLogin, UserGet, UserPut, UserDelete } from "../controllers/user.js"
import { User } from "../../database/models/user.js";
import { hashSync, genSaltSync } from "bcrypt";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const UserRouter = express.Router()

UserRouter.use(express.json())

UserRouter.post("/register", (req, res) => {
    let email = req.body.email
    if (!emailRegex.test(email)) {
        res.status(400).send("Not an Email")
        return   
    }
    let username = req.body.username
    let password = req.body.password
    if (email === undefined 
        || username === undefined
        || password === undefined) {
        res.status(400).send("Error")
        return
    }
    let salt = genSaltSync(10)
    let user = new User({
        username: username,
        email: email,
        hashedPassword: hashSync(password, salt)
    })
    user.save().then(() => {
        res.status(200).json(user)
    }).catch((err) => {
        console.log("User Register Error:", err)
        res.status(500).send("User Register Error: " + err)
    })
})
UserRouter.post("/login", (req, res) => {

})
UserRouter.get("/:id", (req, res) => {
    User.findOne({_id: req.params.id}).then((user) => {
        console.log("Deleted:",user.IsDeleted())
        if (user.IsDeleted()) {
            res.status(400).send("User Deleted")
            return
        }
        res.status(200).json(user)
    }).catch((err) => {
        res.status(500).send("User Get Error: " + err)
    })
})
UserRouter.put("/:id", (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {
        returnOriginal: false
    }).then((user) => {
        if (user.IsDeleted()) {
            res.status(400).send("User Deleted")
            return
        }
        res.status(200).json(user)
    }).catch((err) => {
        res.status(500).send("User Put Error: " + err)
    })
})

UserRouter.delete("/:id", (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, {deletedAt: Date.now()}).then((user) => {
        res.status(200).send("Ok")
    }).catch((err) => {
        res.status(500).send("User Delete Error: " + err)
    })
})