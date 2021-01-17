import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import EmployerSignIn from './Components/EmployerSignIn';
import HomePage from './Components/HomePage';

//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
   <BrowserRouter>
  {/* <switch> */}
  <Route exact path='/' component={HomePage}/>
   <Route exact path='/EmployerSignIn' component={EmployerSignIn}/>
  {/* <React.StrictMode>
    <App />
  </React.StrictMode>, */}
  {/* </switch> */}
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
