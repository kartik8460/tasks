process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../app');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);
const User = require('./../models/user.model');

describe('Auth + User API', () => {
    let userRegister = {
        name: "Example Example",
        email: "example@example.com",
        password: "example"
    }

    let userLogin = {
        email: "test@test.com",
        password: "test"
    }
    describe('Auth API', () => {
        before((done) => {
            User.deleteOne({email: userRegister.email}).then(result => {
                done();
            });
        });
    
        it('Post Request - /api/v1/auth/register', (complete) => {
            chai.request(server).post('/api/v1/auth/register').send(userRegister).end((err, response) => {
                response.should.have.status(201);
                response.body.success.should.be.true;
                response.body.should.have.property('message');
                complete();
            });
        })
    
        it('Post Request - /api/v1/auth/login', (complete) => {
            chai.request(server).post('/api/v1/auth/login').send(userRegister).end((err, response) => {
                response.should.have.status(200);
                response.body.success.should.be.true;
                response.body.should.have.property('token');
                response.body.should.have.property('expiresIn');
                complete();
            })
        })
    })
    describe('Users API', () => {
    
        it('Get Request - /api/v1/user/get-users', (complete) => {
            chai.request(server).get('/api/v1/user/get-users').end((err, response) => {
                response.should.have.status(200);
                response.body.success.should.be.true;
                response.body.should.have.property('users');
                response.body.users.should.be.a('array');
                complete();
            });
        })
    })
})

