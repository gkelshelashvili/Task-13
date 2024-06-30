import React from 'react'

const TodoDoneList = React.memo(({donetasks,delateTaskDone,handlereset})  => 
   {
        return(
            <ul>
                {donetasks.map((task,index) => {
                    <li key={index}>
                        <h1>{task.task}</h1>
                        <button onClick={() => delateTaskDone(index)}>delete</button>
                        <button onClick={() => handlereset(index)}>reset</button>
                    </li>
                })}
            </ul>
        )
        
    })


export default TodoDoneList