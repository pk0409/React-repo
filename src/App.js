
// import CreateEmployerComponent from './Components/CreateEmployerComponent';
// import CreateJobComponent from './Components/CreateJobComponent';
// import EditEmployerComponent from './Components/EditEmployerComponent';
// import EditJobComponent from './Components/EditJobComponent';
//import Navigation from './Components/Navigation';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import React from 'react';
import { Link } from 'react-router-dom';
import SubmitDocument from './Components/SubmitDocument';
import EmployerSignIn from './Components/EmployerSignIn';
//import Navigation from './Components/Navigation';
function App() {
  return (
    <div>     
      {/* <CreateEmployerComponent/>
      <CreateJobComponent/>
      <EditEmployerComponent/>
      <EditJobComponent/> */}
      <HomePage/>
    </div>
  );
    
  
}export default App;
