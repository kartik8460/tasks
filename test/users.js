process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Get All Users', () => {
    it('/get-users', (complete) => {
        chai.request(server).get('/api/v1/user/get-users').end((err, res) => {
            res.should.have.status(200);
            res.body.users.should.be.a('array');
            console.log(res.body);
            complete();
        })
    })
})

describe('Describe Auth', () => {
    let userRegister = {
        name: "Test Post 1",
        email: "test@test.com",
        password: "test"
    }

    let userLogin = {
        email: "test@test.com",
        password: "test"
    }

    it('Register Api', (complete) => {
        chai.request(server).post('/api/v1/auth/register').send(userRegister).end((err, result) => {
            result.should.have.status(200);
            result.body.should.be.an('object');
            complete()
        })
    })

    it('Login Api', (complete) => {
        chai.request(server).post('/api/v1/auth/login').send(userLogin).end((err, result) => {
            result.should.have.status(200);
            result.body.should.be.an('object');
            complete()
        })
    })
})