const assert = require('assert').strict;
const supertest = require('supertest')
const app = require('../src/express/app.js');

describe('Router', () => {
    it.only('GET /posts', async() => {
        await supertest(app)
            .get('/posts')
            .expect(200)
            .then((response) => {
                assert.equal(typeof (response.body), 'object')

            })
    })
})