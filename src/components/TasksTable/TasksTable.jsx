import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import { Trash, CheckCircle, XCircle } from 'react-bootstrap-icons';

const TasksTable = () =>{
    const {tasks, removeTask, finishTask, deleteAll} = useContext(TasksContext)

    if(tasks.length > 0){
        return(
            <div className="d-grid container w-75 mt-5 p-3 bg-dark rounded">
                <div className="p-3 d-flex flex-wrap justify-content-between">
                    <h3 className="text-light">Tareas</h3>
                    <button className="btn text-light" onClick={() => deleteAll()}><Trash/></button>
                </div>
                <hr/>
                {tasks.map(task => {
                    return (
                        <div className="d-flex flex-column" key={task.name}>
                            <div className="d-flex flex-wrap justify-content-center justify-content-between-lg align-items-center" key={task.id}>
                                <div className="d-flex flex-wrap ps-2 g-5 align-items-center justify-content-center justify-content-between-lg">
                                    <h4 className="p-2 text-light m-0">{task.name}</h4>
                                    <div className="ps-md-5 d-flex flex-wrap flex-sm-column justify-content-center align-items-center">
                                        <p className="text-bold text-light m-0">{task.date}</p>
                                        <p className="text-bold text-light m-0">at</p>
                                        <p className="text-bold text-light m-0">{task.time}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center">
                                    {task.done
                                    ?
                                    <h4 className="text-success m-0 col">Terminada</h4>
                                    :
                                    <>
                                    <h4 className="text-danger m-0 col">Pendiente</h4>
                                    <button className="btn text-light" onClick={() => finishTask(task)}><CheckCircle/></button>
                                    </>
                                    }
                                    <button className="btn text-light" onClick={() => removeTask(task)}><XCircle/></button>
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