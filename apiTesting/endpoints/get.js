/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.JSONPLACEHOLDER);

export default () => api.get('/posts')
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/x-www-form-urlencoded')
