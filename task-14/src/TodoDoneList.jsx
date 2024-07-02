import React from 'react'

const TodoDoneList = React.memo(({id,donetasks,delateTaskDone,handlereset})  => 
   {
        return(
            <li>
                {donetasks}
                <button onClick={() => delateTaskDone(id)}>Delete</button>
                <button onClick={() => handlereset(id)}>Reset</button>
            </li>
        )
        
    })


export default TodoDoneList