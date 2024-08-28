import Button from './components/Button.jsx';
import './App.css'
import Card from './components/Card.jsx';
import { useState } from 'react';
import htmlimg from './assets/HTML5.svg';
import cssimg from './assets/CSS3.svg';
import jsimg from './assets/JavaScript.svg'

function App() {

  //NOTE creating state for the data which changes in our application so that react rerender our application to show the updated content
const [product, setProduct] = useState('tv')
 const[firstName , setFirstName]= useState('ritesh')

 //NOTE Handling the events
 const handleClick = () => {
 setProduct('mobile')
 setFirstName('abc')
 }

 const emojiArray = ['❌','✅','🚀','🍿']
 
  return (
    <>
    <button className="px-6 py-2 bg-red-500 rounded-sm m-4 text-white" onClick={handleClick} >Click</button>

   {/* rendering a list in react */}
   {emojiArray.map((el)=>(
    <div>{el}</div>
   ))}
 
    <p className='text-3xl m-3'>{firstName}</p>
      <div className='flex justify-center'>
      <Card img={htmlimg} text='HTML'/>
      <Card img={cssimg} text='CSS'/>
      <Card img={jsimg} text='JAVASCRIPT'/>
      </div>
    </>

  );
}

export default App;
