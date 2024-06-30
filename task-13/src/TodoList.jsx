import React from 'react'

const TodoList = React.memo(({tasks,handleDelete,handleDone})  => 
    {
         return(<ul>
            {tasks.map((task,index) => {
                    <li key={index}>
                    <h1>{task.task}</h1>
                    <button onClick={() => handleDelete(index)}>delete</button>
                    <button onClick={() => handleDone(index)}>done</button>
                </li>
            })}
        </ul>
         )
         
     })
 

export default TodoList