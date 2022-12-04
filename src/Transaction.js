import './App.css';
import React, { useRef } from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from '@mui/material';
import {Typography } from "@mui/material";
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Badge from '@mui/material/Badge';
import "./Farm6.css"
import "./Transaction.css"
function App() {
  const [custname,setName]=useState("");
  const [custsend,setsend]=useState("");
  const [custprop,setprop]=useState("");
  const [custAmm,setAmm]=useState(0);
  const [custcar,setcar]=useState(0);
  const [custcAmm,setcAmm]=useState(0);
  const [studList,setStudList]=useState([]);
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{custname:custname, custAmm:custAmm,custsend:custsend,custprop:custprop,custcAmm:custcAmm,custcar:custcar});
    console.log(custname, custAmm,custsend,custprop,custcAmm,custcar);
    alert("Sucessfully sended money")
  }
  const [count, setCount] = React.useState(0);
  return (
 <center>
  <div className = "form-box6">
  <Card sx={{width:900}}>
    <div className = "App">
    <Typography class="tyu">Please enter details</Typography>
   <br></br>

 
<label>Sender Name</label><br/>
<input type="text"
onChange={(event)=>setName(event.target.value)}/><br/>
<label>Reciver Acc Number</label><br/>
<input type="number"
onChange={(event)=>setcar(event.target.value)}/><br/>

<label>Reciver Name</label><br/>
<input type="text"
onChange={(event)=>setsend(event.target.value)}/><br/>
<label>Reason</label><br/>
<input type="text"
onChange={(event)=>setprop(event.target.value)}/><br/>
<label>Ammount</label><br/>
<input type="number"
onChange={(event)=>setAmm(event.target.value)}/><br/>
<label>Confirm Ammount</label><br/>
<input type="number"
onChange={(event)=>setcAmm(event.target.value)}/><br/>
    <button onClick={() => {
      addToList();
      setCount(count + 1);

 }} >Make Transaction </button>
 <br></br>
  <Badge color="secondary" badgeContent={count}>
         <AccountBalanceWalletIcon/>
        </Badge>
    </div>
   
    </Card>
    </div>
    </center>

  );
  
}


export default App;