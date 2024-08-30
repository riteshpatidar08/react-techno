import React, { useEffect } from 'react';

function Product() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      console.log(data.products);
    };
    fetchData();
  }, []);
  
  return <div></div>;
}

export default Product;

//TODO fetching data using useEffect
// step1 import the useEffect from react
//step2 call the useEffect inside the component
