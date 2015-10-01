import { Router } from 'express';
import todos from './todos';

export default function() {

  var api = Router();
  api.use(todos());

  return api;

}
