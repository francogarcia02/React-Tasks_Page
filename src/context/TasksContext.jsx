import { createContext, useState, children, useEffect } from 'react';

export const TasksContext = createContext();

const tasksLocal = JSON.parse(localStorage.getItem("tasks")) || [];

export const TasksProvider = ({children}) =>{
    const [tasks, setTasks] = useState(tasksLocal);
    const [errorExist, setErrorExist] = useState(false)

    const newTask = (task) =>{
        const nuevasTasks = [...tasks]
        const existeTask = nuevasTasks.find(item => item.name === task.name)
        if(existeTask){
            setErrorExist(true)
        }
        else{
            nuevasTasks.push(task)
            setTasks(nuevasTasks)
            setErrorExist(false)
        }
    }

    const finishTask = (task) => {
        const temporalTasks = tasks.map(item => {
            if (item.name === task.name) {
                return { ...item, done: true }; // Marcar la tarea como completada
            }
            return item;
        });
        setTasks(temporalTasks);
    };

    const removeTask = (task) =>{
        let temporalTasks = [...tasks]
        temporalTasks = temporalTasks.filter(item => item.name !== task.name);
        setTasks(temporalTasks)
    }

    const deleteAll = () => {
        setTasks([])
    }

    useEffect(() =>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])

    return(
    <TasksContext.Provider
    value={{
    tasks,
    newTask,
    removeTask,
    errorExist,
    finishTask,
    deleteAll
    }}>
        {children}
    </TasksContext.Provider>
    )
}