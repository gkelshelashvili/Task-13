import React, { useEffect, useState } from 'react'
import TodoList from './Components/TodoList'

const API_KEY = 'D3TCuniFl2cmaWdst3ryPNNcD6yx_ZZCnaUiFW-uuhHptF1Wjw'

const App = () => {
  const [data,setData] = useState([])
  const onFormSubmit = (name) => {
    fetch('/api/v1/todo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{name, isCompleted: 'false'}])
    }).then(resp => console.log(resp)).catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch('/api/v1/todo', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    }).then((resp) => resp.json())
      .then((data) => setData(data))
  }, [])
  
  console.log(data.items)
  return (
    <div>
      
      <TodoList onFormSubmit={onFormSubmit}/>
    </div>
  )
}

export default App