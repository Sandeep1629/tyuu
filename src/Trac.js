import './App.css';
import * as React from 'react';
import "./Trac"

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
   <Card sx={{ maxWidth:525 }}>

    {studList.map((val,key)=>{
    
      
  return <div key={key}>
     <Card sx={{ maxWidth:525 }}>
    <Typography class="typogra"variant='h5'>
  Sender Name : {val.sname}</Typography>
  <Typography class="typogra"variant='h5'>Reciver Name : {val.rname}</Typography>
  <Typography class="typogra"variant='h5'>Sent Ammount : {val.sac}</Typography><hr>
  
  </hr>
  </Card>
  </div> 
  

   
  })}
   </Card>
   </center>
    </div>
  );
  
}


export default App;