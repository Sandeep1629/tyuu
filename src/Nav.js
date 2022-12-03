

import "./Nav.css"; 
import { AppBar, Toolbar} from "@mui/material"; 
import { Box, Button, Typography } from "@mui/material"; 
import { Link } from "react-router-dom"; 
import pig from './assets/rms.png'

const Nav = () => { 
  return ( 
    <div className="homee"> 
      <div className="homee__left"> 
        <div className="homee__title"> 
          <Typography variant="h2" component="h3"> 
          Easy way to manage your money
          </Typography> 
        </div> 
        <br></br>
  
        <div className="homee__buttons"> 
            
           
            <Button className="homee__button1" variant="outlined" size="large"> 
            <Link to='/Logi' >Get Started </Link>
            </Button> 
          
         
        </div> 
      </div> 
    
      <div className="homee__right"> 
        <div className="homee__image"> 
          <img src={pig} alt="Banking" /> 
        </div> 
     
      </div> 
     
    </div> 
   
  ); 
}; 
 
export default Nav;