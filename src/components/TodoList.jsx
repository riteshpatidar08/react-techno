import React from 'react';
import { useState } from 'react';
const TodoList = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = () => {};
  return (
    <div className="h-screen flex items-center justify-center">
      <form>
        <input
          className="w-64 h-10 border border-slate-700 m-3 rounded-md"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 px-6 py-2 rounded-md text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoList;
