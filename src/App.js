import React, { useState } from 'react';
import './App.css';
import NaviBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/about'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
function App() {
  const [alert,setAlert ]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#044382';
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtil-DarkMode'; it is used to change title dynamically when clicked a button
      // setInterval(() => {
      //   document.title='TextUtil is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='install textutils';
      // }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      // document.title='TextUtil-LightMode';

    }
  }
  
  
  return (
    <>
    
{/* here exact is used in route to match exact page to render as react matches pages partialy */}
{/* /users -> component 1
    /user/home -> component 2
    to get difference between these 2 components we have to use exact keyword in route */}
      <Router>
      <NaviBar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="my-4container my-5">
      {/* <TextForm showAlert={showAlert} mode={mode} heading="Enter your text to analyze " /> */}
      <Routes>
          <Route   path="/about" element={<About mode={mode}/>}/>
          <Route  path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Try TextUtils - word counter, character counter, Remove extra spaces " />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
