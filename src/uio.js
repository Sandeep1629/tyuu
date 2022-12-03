
import "./Home.css"; 
import image from "./assets/jjjj.jpeg"; 
import { Box, Button, Typography } from "@mui/material"; 
import { Link } from "react-router-dom"; 

import Layout from './Layout'

const Home = () => { 
  return ( 
    <div className="home"> 
      <div className="home__left"> 
        <div className="home__title"> 
          <Typography variant="h2" component="h3"> 
            Welcome Admin
          </Typography> 
        </div> 
        <br></br>
        <div className="home__subTitle"> 
          <Typography variant="h6" component="h6"> 
          Edit the features
          </Typography> 
        </div> 
         
           
          
          
         
       
      </div> 
    
      <div className="home__right"> 
        <div className="home__image"> 
          <img src={image} alt="Banking" /> 
        </div> 
     
      </div> 
     
    </div> 
   
  ); 
}; 
 
export default Home;