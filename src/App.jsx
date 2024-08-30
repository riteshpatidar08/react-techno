import React, { useEffect , useState } from 'react'
import Product from './components/Product';
import Description from './components/Description';
import Profile from './components/Profile';

function App() {
  const [count ,setCount] = useState(0);

//NOTE without dependency array
  useEffect(()=>{
    console.log('this will run every time')
  })

  //NOTE with empty dependency array
  useEffect(()=>{
    console.log("this will run one time when page refresh")
  },[])

  //note this will run when dependency changes or updated
  useEffect(()=>{
    console.log('this will run when count increase')
  },[count])

  const data = {
    user : 'ritesh'
  }

  return (
    <div>
      {/* <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>increase</button> */}

   
    <Description user={data}/>
    <Profile user={data}/>
    </div>
  )
}

export default App


// useEffect(callback ,dependeny array) ;