import React, { useEffect ,useState } from 'react';
import Card from './Card';
import { CircularProgress } from '@mui/material';
function Product() {
    const [product , setProduct] = useState([]) ;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProduct(data.products);
    };
    fetchData();
  }, []);

  return <div className='grid grid-cols-4'>
  {product.length > 0 ? (product.map((el)=>(
        <Card img={el.images[0]} text={el.title} />
    ))) : 
   <CircularProgress/>}
    
  </div>;
}

export default Product;

//TODO fetching data using useEffect
// step1 import the useEffect from react
//step2 call the useEffect inside the component
