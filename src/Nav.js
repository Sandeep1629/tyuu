import React from 'react'
import { useTheme } from '@mui/material/styles';
import vid from "./vid.mp4";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rim from './assets/Rim.jpg'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import "./Nav.css"; 
import po from "./assets/po.jpg"
const Nav=()=>
{
    return(
        <div className='body'>
          <center>
        
            <div className="card">
            <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'coloumn' }}>
            <CardContent sx={{ flex: '6' }}>
           <Typography class="logy" variant='inherit'>
         
      Welcome to our Banking Services
          </Typography>
          <CardMedia 
        component="img"sx=
        {{ width: 470  }}
        image={Rim}
        alt="Banking"
      />
       
       <Typography class="cla1" variant="inherit"  component="div">
          <Link to="/Logi"> <Button class="but">Login </Button></Link>
          </Typography>
          <Typography class="cla2" variant="button"  component="div">
          <Link to="/register"> <Button class="but">Register </Button></Link>
          </Typography>
          <Typography class="cla3"variant="button" component="div">
          <Link to="/rex"><Button class="but"> Admin </Button></Link>
          </Typography>
          <Typography class="cla3"variant="button" component="div">
          <Link to="/form"><Button class="but"> how to use </Button></Link>
          </Typography>
          <Typography class="cla3"variant="button" component="div">
          <Link to="/otp"><Button class="but">otp login </Button></Link>
          </Typography>

          </CardContent>
          </Box>
      
          
          <br>
          </br>
          <hr></hr>
          <CardMedia class="mowa">
            <Typography class="claaa" variant='inherit'>

              About Website
           
            </Typography>
            <br></br>
          <video controls autostart autoPlay src={vid} type="video/mp4" />
          </CardMedia>
          <hr></hr>
  
         
    </Card>
    </div>
    </center>  
          
        </div>
    )
}
export default Nav