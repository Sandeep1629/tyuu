import './App.css';
import * as React from 'react';
import "./Trac.css"
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ilu from './assets/rara.png'
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
 
    <div >
   <center>
   <Typography class="tyu">Customer Transactions</Typography>
   


    {studList.map((val,key)=>{
    
      
  return <div key={key}>

    
   
    <Typography class="typogra"variant='h4'>
 Money sent by  {val.sname} to {val.rname}  </Typography>
  
  
  <Typography class="typogra"variant='h5'>Sended Rs:{val.sac}successfully</Typography>
<br>
</br>
<br></br>
  </div> 
  

   
  })}
  
  
   </center>
    </div>
  );
  
}


export default App;