import React ,{useState,useContext} from 'react'
import axios from 'axios';
import { Card, Typography } from "@mui/material";
import { store } from './App';
import { Redirect } from 'react-router-dom';
import "./Log.css"
import vid from './vid.mp4'
import Login from './assets/wo1.png'
import './Farm.css'
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
     
       return  <Redirect to='/home'/>
       
    }
    
    return(
        <div className="homeee"> 
         <div className="homee__lefte"> 
        <div className = "form-box4">
             <center>
           
             <div className='Crd'>
            <form onSubmit={submitHandler} autoComplete="off">
                
             <Typography class="tyu" >
                Login
             </Typography>
            
                <input type ="email" onChange={changeHandler} name="email" placeholder='Email'autoComplete="new-password"/><br/>
                <input type ="password" onChange={changeHandler} name="password" placeholder='Password'autoComplete="new-password"/><br/>
               
                <input type ="submit"  value="Login"/><br/>
            </form> 
          
            </div>
          
          
            </center>
            </div> 
      </div> 
      <div className="homee__righte"> 
        <div className="homee__imagee"> 
          <img src={Login} alt="Banking" /> 
        </div> 
     
      </div> 
            </div>
           
         
      
    ) 
}
export default Log
