import React from 'react'

const TodoList = React.memo(({tasks,handleDelete,handleDone, id})  => 
    {
         return(
            <li>
                {tasks}
                <button onClick={() => handleDelete(id)}>delete</button>
                <button onClick={() => handleDone(tasks)}>done</button>
            </li>
         )
         
     })
 

export default TodoList