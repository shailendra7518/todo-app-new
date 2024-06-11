import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        userId: 1,
        id: Math.random(),
        title,
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
