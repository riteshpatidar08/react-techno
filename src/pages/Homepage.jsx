import React , {useState , useCallback} from 'react'
import TodoList from '../components/TodoList'
import HocMemo from '../components/HocMemo'

function Homepage() {
  const [items,setItems] = useState([], )

  const addItem = useCallback((value) => {
    setItems([...items , value])
  },[])

  return (
    <div>
   <TodoList items={items} addItem={addItem} />
   <HocMemo/>
    </div>
  )
}

export default Homepage
