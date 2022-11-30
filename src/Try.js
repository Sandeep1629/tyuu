import React ,{useState,useContext} from 'react'
import axios from 'axios';
import { Card, Typography } from "@mui/material";
import { store } from './App';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Try.css'
import wet from './assets/wet.jpeg'
import loc from './assets/loccc.png'
import sec from './assets/sec.png'
import Avatar from '@mui/material/Avatar';
const Log=()=>
{

    return(
        <div class='loo'>
             <center>
             <Typography class="logy" variant='inherit'>
Check some cool features by our Website
             </Typography>
             <br></br>
             <br></br>
             <br></br>
            
             <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography class="c22" variant="button"  component="div">
                    <Avatar
                alt="Remy Sharp"
        src={wet}
        sx={{ width: 50, height: 50 }}
      /> 
       <br>
      </br>
      
          <Link to="/wet"> <Button class="butter">Check Wheather</Button></Link>
          </Typography>
          <br></br>
                <Typography class="cla22" variant="button"  component="div">
                <Avatar
        alt="Remy Sharp"
        src={loc}
        sx={{ width: 50, height: 50 }}
      />
      <br>
      </br>
          <Link to="/loc"> <Button class="butter">Geo-Location</Button></Link>
          </Typography>
          <Typography class="cla22" variant="button"  component="div">
                <Avatar
        alt="Remy Sharp"
        src={sec}
        sx={{ width: 50, height: 50 }}
      />
      <br>
      </br>
          <Link to="/sec"> <Button class="butter">Snake Game</Button></Link>
          </Typography>
          
          </Box>
         
        
          
          
            </center>
          
            </div>
      
    ) 
}
export default Log