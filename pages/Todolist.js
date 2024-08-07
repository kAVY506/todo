import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './todoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/todo/getTodos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching to-dos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="todo-item">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
