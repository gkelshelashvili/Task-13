import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { createTask, Update } from '../Utils'

const TaskFrom = () => {
  const history = useHistory()
  const {id} = useParams()
  const isedit = !!id

  const [task, setTask] = useState({
    name:"",
    iscomplete: false,
  })

  useEffect(() => {
    if(isedit){

    }
  },[id,isedit])

  const onChange = (e) => {
    const {name,value} = e.target
    setTask({...task, [name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(isedit) {
      Update(id,task).then(() => {
        history.push('/')
      })
    }else {
      createTask(task).then(() => {
        history.push('/')
      })
    }
  }

  return (
    <div>
      <h2>{isedit ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={onSubmit}>
        <button type='submit'>{isedit ? 'update' : 'create'}</button>
      </form>
    </div>
  )
}

export default TaskFrom