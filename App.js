import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login } from "./Login";
import {Register} from "./Register";
import {Forgotpass} from "./Forgotpass";
function App() {
  //new




  //newend
  
  const [currentForm,setcurrentForm]= useState('login');
  const toggleForm =(forName) =>{
    setcurrentForm(forName)
  }
 
  return (
    <div className="App">
    {
      currentForm==="login" ?<Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
      {/* {
      currentForm==="login" ?<Login onFormSwitch={toggleForm}/> : <Forgotpass onFormSwitch={toggleForm}/>
    } */}



     {/* if(currentForm=== "login") {<Login onFormSwitch={toggleForm}/> }
     if (currentForm=== "register") { <Register onFormSwitch={toggleForm}/>}
     if(currentForm==="Forgotpass"){ <Forgotpass onFormSwitch={toggleForm}/>}
     */}
      </div>
         );
  }

    
export default App;
