import logo from './logo.svg';
import './App.css';
import CreateEmployerComponent from './Components/CreateEmployerComponent';
import CreateJobComponent from './Components/CreateJobComponent';
import EditEmployerComponent from './Components/EditEmployerComponent';
import EditJobComponent from './Components/EditJobComponent';
function App() {
  return (
    <div>
      <CreateEmployerComponent/>
      <CreateJobComponent/>
      <EditEmployerComponent/>
      <EditJobComponent/>
    </div>
  );
}

export default App;
