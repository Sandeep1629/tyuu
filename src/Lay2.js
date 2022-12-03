import Nav from "./Nav";
import { Link } from "react-router-dom"; 
import Avatar from '@mui/material/Avatar';

import { AppBar, Toolbar, Typography } from "@mui/material"; 
import "./Lay2.css"; 
import logo from "./assets/logo.jfif";
import HomeIcon from '@mui/icons-material/Home';
const Layout = () => { 
  return ( 
    <div class="buddy"> 
      
      <AppBar elevation={0} color="transparent"> 
     
        <Toolbar className="app_items"> 
        
          <Link to="/"> 
          
          <div className="rex">
          SdpTeam73
          </div>
          </Link> 
    
          <div className="appbar__rights"> 
          
              <Typography className="appbar__rightChilds"> 
              <Link to='/Logi'> Sign-In </Link>
              </Typography> 
            <Typography className="appbar__rightChilds"> 
              <Link to='/register'>Sign-Up </Link>
              </Typography> 
              
              <Typography className="appbar__rightChilds"> 
              <Link to='/otp'>  Otp-Login </Link>
              </Typography> 
              <Typography className="appbar__rightChilds"> 
              <Link to='/ad'>  Admin</Link>
              </Typography> 
              
          </div> 
        </Toolbar>
       
   <Nav/>
   
      </AppBar> 
      
      
     
    </div> 
    
  ); 
}; 
 
export default Layout;