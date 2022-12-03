import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from '@mui/material';
import {Typography } from "@mui/material";
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
  return (
 <center>
  <div className = "form-box">
  <Card sx={{width:800}}>
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
    <button onClick={addToList }>Make Transaction</button>
    </div>
    </Card>
    </div>
    </center>

  );
  
}


export default App;