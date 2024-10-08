import supertest from "supertest";
import { app } from "../../src/express/app.js";

export function WrongCredentials(done) {
    supertest(app)
        .post("/users/login")
        .expect(400)
        .expect((res) => {
            res.body = "Email or Password undefined";
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
}