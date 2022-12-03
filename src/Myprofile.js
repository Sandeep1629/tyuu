import React from "react";
import { useContext,useState,useEffect } from "react";
import {store} from './App'
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "@mui/material";
import { Redirect } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
const Myprofile=()=>
{
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null); 
      useEffect (()=>
      {
axios.get("http://localhost:5000/myprofile",{
    headers:{
        'x-token' : token
    }
}).then(res =>setData( res.data)).catch((err)=>console.log(err))
      },[])
    if(!token)
    {
        return <Redirect to='/Logi'/>
    }
    return(
        <div >
            <center>
            <Card sx={{maxWidth:525,maxHeight:475}}>
            { 
            data &&
            <center>
           <br></br>Welcome: {data.username}<hr></hr><Link to='/home'><Button>Click here to enter</Button></Link>
            </center>
}</Card>
</center>
        </div>
    )
}
export default Myprofile