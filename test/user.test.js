import { WrongCredentials, GoodCredentials } from "./user/login.js"

describe("User", () => {
    describe("Login", () => {
        it("Wrong Credentials", WrongCredentials)
        it("Good Credentials", GoodCredentials)
    })
})