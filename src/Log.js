import React ,{useState,useContext} from 'react'
import axios from 'axios';
import { Card, Typography } from "@mui/material";
import { store } from './App';
import { Redirect } from 'react-router-dom';
import "./Log.css"
import vid from './vid.mp4'
import './Form.css'
const Log=()=>
{
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
       
        email:'',
        password:''

    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>
    {
        e.preventDefault();
        axios.post("http://localhost:5000/login",data).then(
            res => setToken(res.data.token)
        )
    }
    if(token)
    {
       return  <Redirect to='/myprofile'/>
    }
    return(
        <div className = "form-box">
             <center>
            
             <Card sx={{ maxWidth:475 }}>
             <div className='Crd'>
            <form onSubmit={submitHandler} autoComplete="off">
                <Typography class="tyu">Login with credentials</Typography>
                <hr></hr>
                <input type ="email" onChange={changeHandler} name="email" placeholder='Email'/><br/>
                <input type ="password" onChange={changeHandler} name="password" placeholder='Password'/><br/>
               
                <input type ="Submit"  value="Login"/><br/>
            </form> 
            
            </div>
            </Card>
          
            </center>
          
            </div>
      
    ) 
}
export default Log