import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import images from "./assets/images.jpg"
import Box from '@mui/material/Box';

import CardContent from '@mui/material/CardContent';
import './report.css'
import { Link } from "react-router-dom"; 
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1y2nhry', 'template_twjezuc', form.current, 'CmYxWEZbFEg0PG1LQ')
      .then((result) => {
        alert("sended sucessfully")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className = "form-box">
            
     <center>
     
     <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'coloumn' }}>
            <CardContent sx={{ flex: '1' }}>
      
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
    </CardContent>
          </Box>
      
      
    </Card>
    <Typography class="claaa" variant='inherit'>

Please Report your issue

</Typography>

    </center>
   
   
    </div>
    
  );
};
export default ContactUs;
