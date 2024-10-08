import supertest from "supertest";
import { app } from "../../src/index.js";

export function WrongCredentials() {
    console.log(app)
    supertest(app)
        .post("/users/login")
        .expect(200)
        .then((res) => {
            expect(res.body).toBe("Email or Password undefined")
        })
}