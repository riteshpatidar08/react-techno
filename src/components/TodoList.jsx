import React from 'react';
import { useState } from 'react';
const TodoList = ({items,addItem}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault() ;
    addItem(inputValue)
    setInputValue(' ')
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          className="inputcustom m-3 rounded-md"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="btn"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul>
      {items.map((el)=>(
        <li>{el}</li>
      ))}
      </ul>
    </div>
  );
};

export default TodoList;
