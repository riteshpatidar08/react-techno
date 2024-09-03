import React, { useState ,useMemo} from 'react'

function Memo() {
    const [numbers, setNumber] = useState([1,2,3,4,5]) ;
    const [count ,setCount] = useState(0);

// useMemo(()=>{}, [])
    const sum = () => {
        console.log('calculating sum')
      return numbers.reduce((accu,num)=> accu + num , 0)
    }
 
    const handleAddNumber = () => {
        setNumber([...numbers , numbers.length + 1]) ;
    }

  return (
    <div>
        <p>{count}</p>
        <p>Sum : {sum}</p>
      <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
      {/* {numbers.map((num)=>(
        <div>{num}</div>
      ))} */}
      <button onClick={handleAddNumber}>Add Number</button>
    </div>
  )
}

export default Memo ;

//UseMemo 