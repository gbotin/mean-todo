import request from 'supertest';
import { expect } from 'chai';
import { app, todos } from '../app';

describe('Todos', () => {

  describe('GET todos', () => {
    it('returns a list of todos', (done) => {
      request(app)
        .get('/api/todos')
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.data.todos).to.not.be.empty;

          done();
        });
    });
  });

  describe('GET one todo', () => {
    it('returns on todo by id', (done) => {
      request(app)
        .get('/api/todos/1')
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.data.todo).to.not.be.empty;

          done();
        })
    });
  });

  describe('DELETE one todo', () => {
    it('destroy on todo by id', (done) => {

      var length = todos.length;

      request(app)
        .delete('/api/todos/1')
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(todos.length).to.eq(length-1);

          done();
        })
    });
  });

  describe('POST one todo', () => {
    it('create on todo', (done) => {

      var length = todos.length;

      request(app)
        .post('/api/todos')
        .send({title: 'lol', status: 'wait'})
        .expect(201)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(todos.length).to.eq(length+1);

          done();
        })
    });
  });

});
