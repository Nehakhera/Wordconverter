import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/


function App() {
  const [mode, setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   

  }
  const toggleMode= ()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#080246'
      showAlert("Dark mode has been enables","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
          <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
  
</div>
</>
  );
}

export default App;
