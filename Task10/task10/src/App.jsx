import React, { useState } from 'react';
import './App.css';
import backgroundImg from './images/Bitmap.jpg';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggle = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="background-container">
        <img src={backgroundImg} alt="background" className="background-img" />
      </div>
      <div className="todo-container">
        <h1>TODO</h1>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="todo-input"
        />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <div
                className={`circle ${todo.completed ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
              ></div>
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
              <button className="delete-button" onClick={() => handleDelete(index)}>
                ✖
              </button>
            </div>
          ))}
        </div>
        {todos.some(todo => todo.completed) && (
          <button className="clear-button" onClick={handleClearCompleted}>
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default App;