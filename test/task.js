const Task = require('./../models/task.model');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app');
chai.use(chaiHttp);

describe('Task Tests before login', () => {
    let taskId;
    let AUTHORIZATION;

    let newTask = {
        title: "Task Test Demo",
        description: "This is the description for the task test demo",
        assigned_to: "5f4bb3b9cd157c103040e14b",
        assigned_by: "5f4bb3d5cd157c103040e14c",
    }

    let userDetails = {
        email: "a@a.com",
        password: "a"
    }

    describe('Login Before Task API Testing', () => {
        it('Post Request - /api/v1/auth/login', loggedIn => {
            chai.request(server).post('/api/v1/auth/login').send(userDetails).end((err, response) => {
                AUTHORIZATION = response.body.token;
                loggedIn();
            })
        })
    });

    describe('Task Apis', () => {
        before(taskRemoved => {
            Task.deleteOne({title: newTask.title}).then(result => {
                taskRemoved();
            });
        })

        it('Post Request - /api/v1/task/create-task', taskAdded => {
            chai.request(server).post('/api/v1/task/create-task').set("AUTHORIZATION", AUTHORIZATION).send(newTask).end((err, response) => {
                
                response.should.have.status(200);
                response.body.success.should.be.true;
                response.body.should.have.property('task');
                taskId = response.body.task._id
                taskAdded();
            })
        });

        it('POST Request - /api/v1/task/get-task-by-id', taskRecevied => {
            chai.request(server).get(`/api/v1/task/get-task-by-id/${taskId}`).set("AUTHORIZATION", AUTHORIZATION).end((err, response) => {
                response.should.have.status(200);
                response.body.success.should.be.true;
                response.body.should.have.property('task');
                taskRecevied();
            })
        })
    })
})