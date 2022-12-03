import React, { useState } from "react";
import ReactDOM from "react-dom";
import Rim from './assets/Rim.jpg';

import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import "./Farm8.css"
import "./Login.css"
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Sandeep",
      password: "Nani@1629"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    <div className="form-box570">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <center>
        
<div className="form-box570">
    <Card class="sandy"sx={{ maxWidth:525}}>
        <center>
        <div className="home__title"> 
          <Typography variant="h4" component="h4"> 
       Admin Panel
          </Typography> 
        </div> 

   
   
      <div className="Form-box570">
        {isSubmitted ? <div>
          <Link to="/home2"> successfully logged in
          </Link></div> : renderForm}
      </div>
    
       
    
    </center>
    </Card>
   </div>
    
   
    </center>
 
  );
  
}
export default App;

