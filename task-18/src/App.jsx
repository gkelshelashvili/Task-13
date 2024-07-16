import React, { useState } from 'react'
import TodoList from './Components/TodoList'

const API_KEY = 'D3TCuniFl2cmaWdst3ryPNNcD6yx_ZZCnaUiFW-uuhHptF1Wjw'

const App = () => {
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

  return (
    <div>
      <TodoList onFormSubmit={onFormSubmit}/>
    </div>
  )
}

export default App