import jsonwebtoken from "jsonwebtoken";
import { User } from "../../database/models/user.js";
import { hashSync, genSaltSync, hash } from "bcrypt";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function UserRegister(req, res) {
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
    let user = new User({
        username: username,
        email: email,
        hashedPassword: hashSync(password, process.env.HASH_SALT)
    })
    user.save().then(() => {
        res.status(200).json(user)
    }).catch((err) => {
        console.log("User Register Error:", err)
        res.status(500).send("User Register Error: " + err)
    })
}

export function UserLogin(req, res) {
    const password = req.body.password
    const email = req.body.email
    if (email === undefined || password === undefined) {
        res.status(400).send("Email or Password undefined")
        return
    }
    User.findOne({email: email, hashedPassword: hashSync(password, process.env.HASH_SALT)}).then((user) => {
        console.log(user)
        const accessToken = jsonwebtoken.sign(user.id, process.env.JWT_KEY);
        res.status(200).json({ accessToken});
    }).catch((err) => {
        res.status(500).send("Login Error: " + err)
    })
} 

export function UserGet(req, res) {
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
}

export function UserPut(res, req) {
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
}

export function UserDelete(res, req) {
    User.findOneAndUpdate({_id: req.params.id}, {deletedAt: Date.now()}).then((user) => {
        res.status(200).send("Ok")
    }).catch((err) => {
        res.status(500).send("User Delete Error: " + err)
    })
}