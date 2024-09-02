import React from 'react'
import { useReducer } from 'react'
function Reducer() {
    const initialState = {
        count : 0
    }

    const reducer = (state,action) =>{
        switch(action.type){
            case "INCREMENT":
                return {count : state.count +1}
                case "INCREMENTBYFIVE":
                    return {count : state.count + action.payload}
                default :
                return 'Invalid action'
        }
    }

 const [state, dispatch] = useReducer(reducer , initialState)
  console.log(state)

const handleIncrement = () =>{
    dispatch({tpye:'INCREMENT'})
}
const handleIncrementByFive = () => {
    dispatch({type : 'INCREMENTBYFIVE', payload : 5})
}
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleIncrementByFive}>Increase by 5</button>
      <button>Reset</button>
    </div>
  )
}

export default Reducer


//useReducer : 

//initialState
//reducer 
//action 
//dispatch 
//state

//reducer reducer is a function which accepts the older state and action and returns a new state

// reducer(state,action)

// action = {
//     type : 'INCREMENT'
// }