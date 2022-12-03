import Home from "./uio";
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
              <Link to='/tracc'>All Transactions</Link>
              </Typography> 
             
              <Typography className="appbar__rightChild"> 
          <Link to='/crpp'> registerd Customers
          </Link>
              </Typography>
              
              <Typography className="appbar__rightChild"> 
          <Link to='/cons'> Modify</Link> 
              </Typography> 
             
         
              <Typography className="appbar__rightChild"> 
          <Link to='/'>  Logout
          </Link>
              </Typography> 
         
          </div> 
        </Toolbar>
        <div className="money__right"> 
        <Home/> 
      </div> 
      </AppBar> 
      
      
     
    </div> 
    
  ); 
}; 
 
export default Layout;