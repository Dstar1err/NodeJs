import express from "express"
import { UserRegister, UserLogin, UserGet, UserPut, UserDelete } from "../controllers/user.js"
import { JWTAuthMiddleware } from "../middlewares/jwtauth.js";

export const UserRouter = express.Router()

UserRouter.use(express.json())

UserRouter.post("/register", UserRegister)
UserRouter.post("/login", UserLogin)

UserRouter.use(JWTAuthMiddleware)

UserRouter.get("/:id", UserGet)
UserRouter.put("/:id", UserPut)
UserRouter.delete("/:id", UserDelete)