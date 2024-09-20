const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.saleteRoute);
routes.get('/henrique', lesson1Controller.henriqueRoute);
routes.get('/lucas', lesson1Controller.lucasRoute);

module.exports = routes;