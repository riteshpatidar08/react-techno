import Button from './components/Button.jsx';
import './App.css'
import Card from './components/Card.jsx';
import { useState } from 'react';
import htmlimg from './assets/HTML5.svg';
import cssimg from './assets/CSS3.svg';
import jsimg from './assets/JavaScript.svg'
import Userlist from './components/Userlist.jsx';
import Form from './components/Form.jsx';

function App() {

  //NOTE creating state for the data which changes in our application so that react rerender our application to show the updated content
const [product, setProduct] = useState('tv')

 const[firstName , setFirstName]= useState('ritesh')

const [username,setUsername] = useState(' ');
const [password,setPassword] = useState(' ');

 //NOTE Handling the events
 const handleClick = () => {
 setProduct('mobile')
 setFirstName('abc')
 }

 const cardData = [
  {id : 1, img : htmlimg , text:'HTML'},
  {id : 2 ,img:cssimg , text:'CSS'},
  {id : 3 ,img:jsimg , text:'Javascript'}
 ]

 const emojiArray = ['❌','✅','🚀','🍿'] ;

  return (
    <>
{/* lifting the state-up */}
    <Userlist username={username} password={password}/>
    <Form username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>

    <button className="px-6 py-2 bg-red-500 rounded-sm m-4 text-white" onClick={handleClick} >Click</button>

   {/* rendering a list in react */}
   {emojiArray.map((el)=>(
    <div>{el}</div>
   ))}
 
    <p className='text-3xl m-3'>{firstName}</p>
      <div className='flex justify-center'>
      {cardData.map((el)=>(
        <Card key={el.id} img={el.img} text={el.text}/>
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

//NOTE GETTING THE  VALUES FROM FORM FIEDLS 
//STEP-1 First pass an onChange event in the input field.
//STEP-2 Create an event handler which access the value from the input field when you type in it , to get the value "event" object is automatically available in the params of the handleEvent function from thier you can use "event.target.value" to get the value of the input field and save it in a state.eg : setUsername(event.target.value). 

//NOTE LIFTING THE STATE UP = means when you have share data from one sibling component to other sibling component you have to get thier parent component and define the state their to share data between both of them using props.


//TODO VIRTUAL DOM 
//TODO FORM HANDLING
//TODO USEFFECT
//TODO PROP DRILLING