import supertest from "supertest";
import { app } from "../../src/express/app.js";

export function WrongCredentials() {
    supertest(app)
        .post("/users/login")
        .expect(400)
        .then((res) => {
            console.log(res.body)
            expect(res.body).toBe("Email or Password undefined")
        })
}