import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/todo/createTodo', {
        title,
        description
      });
      console.log('To-do created successfully:', response.data);
    } catch (error) {
      console.error('Error creating to-do:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Add To-Do</button>
    </form>
  );
};

export default AddTodo;