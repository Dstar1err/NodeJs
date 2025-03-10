import { WrongCredentials, GoodCredentials } from "./user/login.js"
import { connect, closeDatabase } from "./setup.js"
import 'dotenv/config'
import { GoodRegister, WrongEmailRegister, WrongWithoutPasswordRegister } from "./user/register.js"

describe("User", () => {
    beforeAll(() => {
        connect()
    })
    describe("Regiser", () => {
        it("WrongWithoutPasswordRegister", WrongWithoutPasswordRegister)
        it("WrongEmailRegister", WrongEmailRegister)
        it("Good Register", GoodRegister)
    })
    describe("Login", () => {
        it("Wrong Credentials", WrongCredentials)
        it("Good Credentials", GoodCredentials)
    })
    afterAll(() => {
        closeDatabase()
    })
})