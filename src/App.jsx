import Button from './components/Button.jsx';
import './App.css'
import Card from './components/Card.jsx';

import htmlimg from './assets/HTML5.svg';
import cssimg from './assets/CSS3.svg';
import jsimg from './assets/JavaScript.svg'

function App() {
let product = 'tv';

const handleClick = () => {
   product = 'mobile' ;
   console.log(product)
 
}
  return (
    <>
    <button className="px-6 py-2 bg-red-500 rounded-sm m-4 text-white" onClick={handleClick} >Click</button>
   

    <p className='text-3xl m-3'>{product}</p>
      <div className='flex justify-center'>
      <Card img={htmlimg} text='HTML'/>
      <Card img={cssimg} text='CSS'/>
      <Card img={jsimg} text='JAVASCRIPT'/>
      </div>
    </>

  );
}

export default App;
