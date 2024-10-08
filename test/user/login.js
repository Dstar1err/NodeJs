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

export function GoodCredentials(done) {
    supertest(app)
    .post("/users/login")
    .expect(500)
    .send({
        email: "stop@stop.com",
        password: "stop",
    })
    .end((err, res) => {
        if (err) return done(err);
        return done();
    });
}