import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import api from './routes/api';

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', api());

var todos = [
  {title: 'test 1', status: 'wait'},
  {title: 'test 2', status: 'wait'},
  {title: 'test 3', status: 'wait'}
];

export {app, todos}
