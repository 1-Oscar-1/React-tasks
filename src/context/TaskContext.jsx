import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/Task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(task) {
        setTasks([...tasks, {title: task.title, id: tasks.length, description: task.description}]) //Los tres puntos al inicio es para mantener un array e insertar nuevo elemento
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{tasks, deleteTask, createTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}