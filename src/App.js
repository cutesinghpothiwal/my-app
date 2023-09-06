import './App.css';
import React, { useState } from "react";
import './components/Navbar';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';

function App() {

  const [Mode, SetMode] = useState("light");

  const toggleMode = () => {


    if (Mode === 'light') {
      SetMode('dark')
      document.body.style.backgroundColor = "#3e4042"
    }

    else {
      SetMode('light')
      document.body.style.backgroundColor = "white"
    }
  }


  return (
    <>
    
    <Router>

    

      <Navbar mode={Mode} modeToggler={toggleMode} />

      <div className="container my-3" >

      <Routes>

          <Route exact path="/About"  element = {<About/>}  />
           
        
       
          <Route exact path="/" element= {<TextForm heading="Enter the text to analyze " mode={Mode} />} />
           
         

            
      </Routes>


      </div>
      
     
    </Router>
    </>
  );
}

export default App;
