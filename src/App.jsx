import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import InputTask from './components/InputTask/InputTask';
import TasksTable from './components/TasksTable/TasksTable';
import { TasksProvider } from './context/TasksContext';

function App() {
    return (
        <TasksProvider>
            <div className="bg-light">
                <div className="d-flex flex-column flex-md-row">
                    <Navbar/>
                    <div className="container  mt-5 p-4 text-center">
                        <InputTask/>
                        <TasksTable/>
                    </div>
                </div>
            </div>
        </TasksProvider>
  );
}

export default App;
