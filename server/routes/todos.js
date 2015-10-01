import { Router } from 'express';
import { todos } from '../app'

export default function() {

  var routes = Router();

  routes.get('/todos', (req, res) => {
    res.json({
      status: 'success',
      data: {
        todos: todos
      }
    });
  });

  routes.get('/todos/:id', (req, res) => {
    var todo = todos[req.params.id];

    res.json({
      status: 'success',
      data: {
        todo: todo
      }
    })
  });

  routes.delete('/todos/:id', (req, res) => {

    todos.splice(req.params.id, 1);

    res.sendStatus(200)

  });

  routes.post('/todos', (req, res) => {
    var todo = req.body.todo

    todos.push(todo);

    res.sendStatus(201);
  });

  return routes;

}
