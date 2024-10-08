import supertest from "supertest";
import { app } from "../../src/index.js";

export function WrongCredentials() {
    supertest(app)
        .post("/users/login")
        .expect(400)
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual("Email or Password undefined");
        })
}