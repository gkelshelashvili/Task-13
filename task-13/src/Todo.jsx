import React,{ PureComponent } from "react"
import TodoDoneList from "./TodoDoneList"
import Todolist from "./TodoList"

class Todo  extends PureComponent {
    state = { 
        tasks: [],
        curentTask: '',
        doneTasks: []
     } 

    handleOnChange = (event) => {
        this.setState({curentTask: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('add')
        const newTask = {
            task: this.state.curentTask,
            done: false
        }
        const tasks = [...this.state.tasks, newTask]
        this.setState({tasks, curentTask: ''})
    }

    handleDelete = (index) => {
        console.log('del')
        const tasks = [...this.state.tasks]
        tasks.splice(index,1)
        this.setState({tasks})
    }

    handleDone = (index) => {
        console.log('done')
        const {tasks,doneTasks} = this.state
        const updateTasks = [...tasks]
        const completedTask = updateTasks.splice(index,1)[0]
        completedTask.done = true
        const completedDoneTask = [...doneTasks,completedTask]
        this.setState({tasks: updateTasks,doneTasks:completedDoneTask})
    }

    handleDoneDelete = (index) => {
        const Donetasks = [...this.state.doneTasks]
        Donetasks.splice(index,1)
        this.setState({Donetasks})
    }

    handleReset = (index) => {
        console.log('done')
        const {tasks,doneTasks} = this.state
        const restTask = doneTasks.splice(index,1)[0]
        const updateTasks = [...tasks, restTask]
        this.setState({tasks: updateTasks,doneTasks:doneTasks})
    }
    shouldComponentUpdate(nextState){
        if(nextState.tasks !== this.state.tasks){
            return true
        }
        return false
    }

    render() { 
        const {tasks,curentTask,doneTasks} = this.state
        return (
            <div>
                <h1>Todo app</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter Task"
                        onChange={this.handleOnChange}
                        value={curentTask}
                    />
                    <button type="submit">Add task</button>
                </form>

                <Todolist
                    tasks={tasks}
                    handleDelete={this.handleDelete}
                    handleDone={this.handleDone}
                />
                <h1>Done Tasks</h1>
                
                <TodoDoneList
                    donetasks={doneTasks}
                    delateTaskDone={this.handleDoneDelete}
                    handlereset= {this.handleReset}
                />
            </div>
        )
    }
}

export default Todo;