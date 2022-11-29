import './App.css';
import * as React from 'react';
import "./Trac"
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ilu from './assets/ilu.png'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Card, Typography } from "@mui/material";
function App() {
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
 
  return (
 
    <div className="form-box">
   <center>
   <Typography class="tyu">All Transactions</Typography>
   <hr></hr>


    {studList.map((val,key)=>{
    
      
  return <div key={key}>

     <Card sx={{ maxWidth:355}}>
     <CardMedia 
        component="img"sx=
        {{ maxWidth:180}}
        image={ilu}
   
      />
   
    <Typography class="typogra"variant='h6'>
  Sender Name : {val.sname}</Typography>
  <Typography class="typogra"variant='h6'>Reciver Name : {val.rname}</Typography>
  <Typography class="typogra"variant='h6'>Sent Ammount : {val.sac}</Typography><hr>
  
  </hr>
  <lr></lr>

  </Card>
  
  <br>
  </br>
  
  </div> 
  

   
  })}
  
  
   </center>
    </div>
  );
  
}


export default App;