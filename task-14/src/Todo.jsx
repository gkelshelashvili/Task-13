import React,{ useCallback, useState } from "react"
import TodoDoneList from "./TodoDoneList"
import Todolist from "./TodoList"

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [currentTask, setCurrentTask] = useState('')
    const [donetask, setDonetask] = useState([])


    const onChange = useCallback((event) => {
        setCurrentTask(event.target.value)
    }, [])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        const task = [...tasks,currentTask]
        setTasks(task)
        setCurrentTask('')
    }, [currentTask,tasks])

    const handleDelete = useCallback((id) => {
        const deletedTask = tasks.filter((index) => index !== id)
        setTasks(deletedTask)
    }, [tasks])

    const handleDone = useCallback((task) => {
        setTasks((tasks) => tasks.filter((el) => el !== task))
        setDonetask((done) => [...done,task])
    }, [])

    const handleDoneDelete = useCallback((id) => {
        const deletedTask = donetask.filter((index) => index !== id)
        setDonetask(deletedTask)
    }, [donetask])

    const handleReset = useCallback((id) => {
        const resettask = donetask[id]
        const updatedTasks = [...tasks,resettask]
        const updatedDoneTasks = donetask.filter((index) => index !== id)
        setTasks(updatedTasks)
        setDonetask(updatedDoneTasks)
    }, [donetask,tasks])
    
    return (
        <div>
            <h1>Todo app</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter Task"
                    onChange={onChange}
                    value={currentTask}
                />
                <button type="submit">Add task</button>
            </form>

            <ul>
                {tasks.map((task,index) => {
                    <Todolist
                        key={index}
                        id={index}
                        tasks={task}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                    />
                })}
            </ul>
            
            <h1>Done Tasks</h1>
            <ul>
                {donetask.map((donetask,index) => {
                    <TodoDoneList
                        key={index}
                        id={index}
                        donetasks={donetask}
                        delateTaskDone={handleDoneDelete}
                        handlereset= {handleReset}
                    />
                })}
            </ul>
        </div>
    )
}

export default Todo;