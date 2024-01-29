import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import { Trash, CheckCircle } from 'react-bootstrap-icons';

const TasksTable = () =>{
    const {tasks, removeTask, finishTask} = useContext(TasksContext)
    console.log(tasks)

    if(tasks.length > 0){
        return(
            <div className="d-grid container w-75 mt-5 p-3 bg-dark rounded">
                {tasks.map(task => {
                    return (
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-wrap justify-content-between align-items-center" key={task.id}>
                                <div className="d-grid ps-2 g-5 align-items-center">
                                    <div className="row">
                                        <h4 className="text-light m-0 col">{task.name}</h4>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center">
                                    {task.done
                                    ?
                                    <h4 className="text-success m-0 col">Terminada</h4>
                                    :
                                    <h4 className="text-danger m-0 col">Pendiente</h4>
                                    }
                                    <button className="btn text-light" onClick={() => finishTask(task)}><CheckCircle/></button>
                                    <button className="btn text-light" onClick={() => removeTask(task)}><Trash/></button>
                                </div>
                            </div>
                            <hr className="text-light"/>
                        </div>
                    );
                })}
            </div>
        )
    }
    return(
        <div className="d-grid container w-75 mt-5 p-3 bg-dark rounded">
            <h3 className="text-light">No hay tareas pendientes</h3>
        </div>
    )

}

export default TasksTable