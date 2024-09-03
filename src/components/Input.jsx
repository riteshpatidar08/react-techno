import React, { useEffect, useRef } from 'react';

const Input = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('Component mounted');
    console.log(inputRef.current); 
  }, []);  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' />
        <button className=''>Submit</button>
      </form>
    </div>
  );
};

export default Input;
