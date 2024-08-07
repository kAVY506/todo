const express = require ('express');
const router = express.Router();

const controller = require ('/controllers/TodoController');


router.get("/getTodo", controllers.getTodo);

router.post("/createTodo", controller.createTodo);
