import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import images from "./assets/perr.png"
import Box from '@mui/material/Box';
import "./report.css"
import "./Farm7.css"
import { Link } from "react-router-dom"; 

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1y2nhry', 'template_twjezuc', form.current, 'CmYxWEZbFEg0PG1LQ')
      .then((result) => {
        alert("Your issue has been sent to our manager.check your mail once for conformation")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="homeee7"> 
    <div className="homee__lefte7"> 
   <div className = "form-box57">
    
            
     <center>
     
      <Card class="sandy"sx={{  maxWidth:600}}>
      
            <Typography class="kow" >
        Please Report Your Issue
       
        </Typography>
  
       
    <form ref={form} onSubmit={sendEmail}
   >

      <input type="text" name="user_name"  placeholder='Enter your name' />
    <br></br>
 
      <input type="text" name="user_email" placeholder='Enter your email' />
      <br></br>
      
      <input type="text" name="user_ad" placeholder='Enter your Adress'/>
      <br></br>
      <input type="text" name="phone" placeholder='Enter your Mobile Number'/>
      <br></br>
      <input type="text" name="issue" placeholder='please write your issue' />
      <br></br>
      <input type="text" name="fed" placeholder='Enter your feedback' />
      <br></br>
      <input type="text" name="Rate" placeholder='Rating for our services'/>
      <br></br>
      <center>
        

      <input type="submit"  value="Send" />

      </center>
    </form>
  
    </Card>
    
    </center>
   
    </div> 
      </div> 
      <div className="homee__righte7"> 
        <div className="homee__imagee7"> 
          <img src={images} alt="Banking" /> 
        </div> 
     
      </div> 
    </div>
    
  );
};
export default ContactUs;
