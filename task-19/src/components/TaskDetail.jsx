import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Utils} from '../Utils'

const TaskDetail = () => {
  const {id} = useParams()
  const [task,setTask] =useState()

  useEffect(() => {
    if(id){
      Utils(id)
        .then((taskData) => {
          setTask(taskData)
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }, [id])

  if(!task) {
    return <div>Loading...</div>
  }
  return (
    <div>TaskDetail</div>
  )
}

export default TaskDetail