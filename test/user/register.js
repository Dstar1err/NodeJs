import supertest from "supertest";
import { app } from "../../src/express/app.js";
import { response } from "express";

export function WrongWithoutPasswordRegister(done) {
    supertest(app)
        .post("/users/register")
        .expect(400)
        .send({
            email: "stop@stop.com",
            username: "stop"
        })
        .end((err, res) => {
            expect(res.text).toBe("Error")
            if (err) return done(err);
            return done();
        });
}

export function WrongEmailRegister(done) {
    supertest(app)
        .post("/users/register")
        .expect(400)
        .send({
            email: "stopstop.com",
            username: "stop",
            password: "stop",
        })
        .end((err, res) => {
            expect(res.text).toBe("Not an Email")
            if (err) return done(err);
            return done();
        });
}

export function GoodRegister(done) {
    supertest(app)
        .post("/users/register")
        .expect(200)
        .send({
            email: "stop@stop.com",
            username: "stop",
            password: "stop",
        })
        .end((err, res) => {
            let user = res.body
            expect(user.username).toBe("stop")
            expect(user.email).toBe("stop@stop.com")
            expect(user._id).toBeDefined()
            if (err) return done(err);
            return done();
        });
}