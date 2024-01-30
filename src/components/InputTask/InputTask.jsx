import { useState } from 'react';
import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import { useForm } from 'react-hook-form';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import { format } from 'date-fns';

const InputTask = () => {
    const { register, handleSubmit } = useForm();
    const { newTask, errorExist } = useContext(TasksContext);
    const [task, setTask] = useState('');
    const [dateSelected, setDateSelected] = useState(new Date())
    const [timeSelected, setTimeSelected] = useState(new Date())

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const Submit = (data) => {
        const formattedDate = format(dateSelected, 'dd/MM/yyyy');
        const formattedTime = format(timeSelected, 'hh:mm');
        data = {...data,
            done: false,
            date: formattedDate,
            time: formattedTime
            }
        newTask(data);
        setTask('');
    };

    return (
        <form
        onSubmit={handleSubmit(Submit)}
        className="d-flex flex-column flex-wrap align-items-center justify-content-center"
            >
            <div className="input-group mx-auto w-75">
                <input
                className="form-control"
                type="text"
                placeholder="Enter a new task"
                {...register("name")}
                value={task}
                onChange={handleTaskChange}
                 />
                <button className="btn btn-primary" type="submit">New</button>
            </div>
            <div className="mt-2 text-center d-flex flex-wrap justify-content-center align-content-center">
                <div className="shadow bg-white text-dark d-flex p-3 m-2 flex-column align-items-center justify-content-center">
                    <label>fecha</label>
                    <DatePicker value={dateSelected} onChange={setDateSelected}/>
                </div>
                <div className="shadow bg-white text-dark d-flex p-3 m-2 flex-column align-items-center justify-content-center">
                    <label>hora</label>
                    <TimePicker value={timeSelected} onChange={setTimeSelected}/>
                </div>
            </div>
        </form>
    );
};

export default InputTask;