const express = require ("express");
const router = express.Router();
const Todo = require ("../Models/TodoModel");


// fetch all the todos

exports.getTodos = async (req,res) =>{
    try{
        const Todos = await Todo.find()
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });

    }
    

};

// create a new Todo
exports. createTodo = async (req,res) => {
    try {
        const{title, description} = req.body;
        const Todo = new Todo ({
            title: title,
            description: description
        });
    }
}
await Todo.Save();
res.status(201). json ({
    message: 'Todo is created sucessfully',
    Todo
    

}); 



 