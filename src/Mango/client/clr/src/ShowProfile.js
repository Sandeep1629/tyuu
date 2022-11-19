import React,{useState} from 'react'  
import AppBar from '@mui/material/AppBar';  
import Box from '@mui/material/Box';  
import Toolbar from '@mui/material/Toolbar';  
import Typography from '@mui/material/Typography';  
import IconButton from '@mui/material/IconButton';  
import MenuIcon from '@mui/icons-material/Menu';  
import DisplayProfile from './DisplayProfile';  
import Card from '@mui/material/Card';  
import './Showprofile.css';  
function Showprofile() {  
    const [userName,setUserName] = useState("");  
    const [data,setData] = useState({});  
  
  
    const onChangeHandler =(e)=>{  
        setUserName(e.target.value)  
    }  
  
    const onSubmitHandler =(e)=>{  
        e.preventDefault();  
        fetch(`https://api.github.com/users/${userName}`)  
        .then((response)=>{  
          return response.json();  
        }).then((originalData)=>{  
          if(originalData){  
            setData(originalData);  
          }  
        })  
    }  
    return (  
          
        <>  
        <center>  
        <Box sx={{ flexGrow: 1 }}>  
      <AppBar position="static">  
        <Toolbar>  
          <IconButton  
            size="large"  
            edge="start"  
            color="inherit"  
            aria-label="menu"  
            sx={{ mr: 2 }}  
          >  
            <MenuIcon />  
          </IconButton>  
          <Typography allign="center"variant="h6" component="div" sx={{ flexGrow: 1}}>  
           Git Hub  
          </Typography>  
        </Toolbar>  
      </AppBar>  
    </Box>  
    <br></br>  
     
    <Card sx={{ maxWidth: 345}}>    
        <div  allign="center"className="container my-5" >  
            <div className="row mt-auto">  
                <div className="col-lg-8 col-sm-12 text-center mx-auto">  
                    <h1 className="display-4 mb-3">GitHub User Profile</h1>  
                </div>  
            </div>  
            <div allign="center" className="row">  
                  
                <div className="col-md-6 mx-auto text-center">  
                    <div className="row mb-5 justify-content-center">  
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>  
                         <div className="col-lg-8 col-sm-12 my-2 form-group">  
                            <input className="form-control form-control-lg" placeholder="Github username" type={userName} id="w"  onChange={onChangeHandler}/>  
                        </div>  
                        <div className="col-lg-3 col-sm-12 my-2 form-group">  
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>  
                        </div>  
                        </form>  
                          
                    </div>  
                </div>  
            </div>  
        </div>  
        <DisplayProfile data={data}></DisplayProfile>  
        </Card>  
        </center>  
        </>  
        
  
    )  
}  
  
export default Showprofile; 