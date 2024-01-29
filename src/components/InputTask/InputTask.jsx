import { useState } from 'react';
import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import {Calendar3} from 'react-bootstrap-icons';

const InputTask = () =>{
    const {newTask, errorExist} = useContext(TasksContext)
    const [task, setTask] = useState('')

    const Submit = (e) =>{
        e.preventDefault();
        newTask({name: task, done: false})
        setTask('')
    }

    return(
        <form
        onSubmit={Submit}
        className="d-flex flex-wrap align-items-center position-relative"
         >
            <div className="input-group mx-auto w-75">
                <input
                className="form-control"
                type="text"
                placeholder="Enter a new task"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                  />
                <button className="btn btn-primary">New</button>
            </div>
            <Calendar3 className="position-absolute"/>
        </form>

    )
}

export default InputTask