import React from "react";
import { useContext,useState,useEffect } from "react";
import {store} from './App'
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { Redirect } from "react-router-dom";
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
        return <Redirect to='/login'/>
    }
    return(
        <div>
            <center>
            <Card sx={{maxWidth:525}}>
            { 
            data &&
            <center>
            Welcome to user :<Link to='/home'> {data.username}</Link>
            </center>
}</Card>
</center>
        </div>
    )
}
export default Myprofile