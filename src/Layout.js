import Home from "./Home";
import { Link } from "react-router-dom"; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AppBar, Toolbar, Typography } from "@mui/material"; 
import "./Layout.css"; 
import logo from "./assets/logo.jfif";
import Money from "./Money";
const Layout = () => { 
  return ( 
    <div> 
      
      <AppBar position="fixed" elevation={0} color=""> 
     
        <Toolbar className="app_items"> 
        
          <Link to="/"> 
          <Avatar className="rex" src={logo} />  
          </Link> 
    
          <div className="appbar__right"> 
          
              <Typography className="appbar__rightChild"> 
              <Link to='/money'> Transfer </Link>
              </Typography> 
            <Typography className="appbar__rightChild"> 
              <Link to='/trac'>Transactions </Link>
              </Typography> 
              
              <Typography className="appbar__rightChild"> 
              <Link to='/curr'>  Currency </Link>
              </Typography> 

              
              <Typography className="appbar__rightChild"> 
          <Link to='/report'>  Report-us
          </Link>
              </Typography> 
              <Typography className="appbar__rightChild"> 
          <Link to='/con'> Contact-us</Link> 
              </Typography> 
              <Typography className="appbar__rightChild"> 
          <Link to='/'>  Logout
          </Link>
              </Typography> 
         
          </div> 
        </Toolbar>
        <div className="money__right"> 
        <Home /> 
      </div> 
      </AppBar> 
      
      
     
    </div> 
    
  ); 
}; 
 
export default Layout;