import React from 'react';
import { useState } from 'react';

import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//  import {
//   Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  
    const [mode,setMode]=useState('light');//weather dark mode is enable or not
 const[alert,setAlert]=useState(null);


 const showAlert=(message,type)=>{
 setAlert({
 msg:message,
  type:type

 })
 setTimeout(()=>{
  setAlert(null);
 },3000);
 }
    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.background='grey';
        showAlert("dark mode has been enabled","success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled","success")
      }
    }
  return (
   <>
    
    <Navbar title="TextUtils"mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>  
   <div className="container my-3">
    {/* <About mode={mode}/>  */}
   <TextForm showAlert={showAlert} heading="textUtils- Word Counter ,Character Counter ,Rclsclllemove extra spaces"mode={mode}/>
   
   </div> 
  
</>
  );
}
export default App;


