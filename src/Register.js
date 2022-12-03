import React ,{useState} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './Register.css';
import './Farm4.css';
import jkl from './assets/poiu.png'
import { Card, Typography } from "@mui/material";
const Register=()=>
{
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''

    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>
    {
        e.preventDefault();
        axios.post("http://localhost:5000/register",data).then(
            res => alert(res.data)
        )
    }
    return(
        <div className="homeee4"> 
        <div className="homee__lefte4"> 
        <div className = "form-box5">
            
            <center>
           
            
                <div className='reg'>
            <form onSubmit={submitHandler}autoComplete="off">
            <Typography class="tyu">Sign Up</Typography>
            
                <input type ="text" onChange={changeHandler} name="username" placeholder='User Name' /><br/>
                <input type ="email" onChange={changeHandler} name="email" placeholder='Email'/><br/>
                <input type ="password" onChange={changeHandler} name="password" placeholder='Password'/><br/>
                <input type ="password" onChange={changeHandler}  name="confirmpassword" placeholder='Confirm password'/><br/>
                <input type ="Submit"  value="Register"/><br/>

            </form>
            </div>
            
           
            </center>
            </div> 
      </div> 
      <div className="homee__righte4"> 
        <div className="homee__imagee4"> 
          <img src={jkl} alt="Banking" /> 
        </div> 
     
      </div> 
        </div>
      
    ) 
}
export default Register