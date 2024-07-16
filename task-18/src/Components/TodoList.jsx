import React, { useState } from 'react'

const TodoList = ({onFormSubmit}) => {
  const [name,setName] = useState()
  
  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(name)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Enter Todo' onChange={e => setName(e.target.value)}/>
      <button>Submit</button>
    </form>
  )
}

export default TodoList