import React, { useEffect, useState } from 'react'
import { deleteTask, fetchTasks } from '../Utils'
import Link from 'react-router-dom'
const TaskList = () => {
  const [task, setTask] = useState([])

  useEffect(() => {
    fetchTasks().then((data) => setTask(data))
  }, [])

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
        setTask(task.filter((task) => task.id !== id))
    })
  }

  return (
    <div>
        <h1>TODO List</h1>
        <ul>
            {task.map((tasks) => {
              <>
                <Link to={`/detail/${tasks.id}`}>{tasks.name}</Link>
                <button onClick={() => deleteTask((tasks.id))}>DEL</button>
              </>
            })}
        </ul>
        <Link to={`/add`}>Add task</Link>
    </div>
  )
}

export default TaskList