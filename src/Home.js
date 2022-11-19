
import "./Home.css"; 
import image from "./assets/bank2.svg"; 
import { Box, Button, Typography } from "@mui/material"; 
import { Link } from "react-router-dom"; 

import Layout from './Layout'

const Home = () => { 
  return ( 
    <div className="home"> 
      <div className="home__left"> 
        <div className="home__title"> 
          <Typography variant="h2" component="h3"> 
            Welcome to Our Banking System 
          </Typography> 
        </div> 
        <br></br>
        <div className="home__subTitle"> 
          <Typography variant="h6" component="h6"> 
          *A bank is a place that will lend you money if you can prove that you don’t need it.
          </Typography> 
        </div> 
        <div className="home__buttons"> 
            <Button 
              className="home__button1" 
              variant="outlined" 
              size="large" 
              color="error" >
            <Link to={'/trac'}>Transactions</Link>
            </Button> 
           
            <Button className="home__button1" variant="outlined" size="large"> 
            <Link to={'/money'} >Money Transfer   </Link>
            </Button> 
          
         
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