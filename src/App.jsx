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

 const cardData = [
  {img : htmlimg , text:'HTML'},{img:cssimg , text:'CSS'},
  {img:jsimg , text:'javascript'}
 ]

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
      {cardData.map((el)=>(
        <Card img={el.img} text={el.text}/>
      ))}
      </div>
    </>

  );
}

export default App;

//NOTE Props = passing data from parent to child.

//NOTE Events = handle the interactions.

//NOTE UseState = used to save the data which changes over time in our application.

//NOTE List rendering = used to render the list of items when you want to show it on the screen 

//TODO VIRTUAL DOM 
//TODO FORM HANDLING
//TODO USEFFECT
//TODO PROP DRILLING