import ReactDOM from "react-dom"; 
import Contact from "./Contact"
import React from "react"; 
import Crypto from './Crypto'
import Money from "./Money";
import Layout from './Layout'
import Trac from "./Trac"
import thank from './thank'
import Nav from "./Nav"; 
import trac2 from './trac2'
import report from "./report"
import form from './form'
import Transaction from "./Transaction"
import Register from "./Register"; 
import Log from "./Log"; 
import cry from './Cust2'
import cryy from './Lays'
import { useState,createContext } from "react"; 

  import {BrowserRouter,Route,Switch} from 'react-router-dom'; 
import Calcc from "./Calcc";
import otp from "./otp";
import Wht from './Wht'
import Try from './Try'
import loc from './loc'
import Snake from './Snake'
import Lay2 from './Lay2'
import Login from './Login'
  export const store =createContext(); 
function App  (){ 
    const[token,setToken] = useState(null); 
    const rootElement = document.getElementById("root"); 
    ReactDOM.render( 
   
      <BrowserRouter> 
      <store.Provider value={[token,setToken]}> 
       <Switch> 
        <Route exact path='/' component={Lay2}/> 
       <Route path='/register' component={Register}/> 
        <Route path='/Logi' component={Log}/> 
      
        <Route path='/rex' component={Login}/> 
        <Route path="/money" component={Money} />
        <Route path='/home' component={Layout}/> 
        <Route path='/curr' component={Calcc}/> 
        <Route path='/con' component={Contact}/> 
        <Route path='/tran' component={Transaction}/> 
        <Route path='/trac' component={Trac}/>
        <Route path='/tracc' component={trac2}/>
        <Route path='/report' component={report}/>
        <Route path='/thank' component={thank}/>
        <Route path='/form' component={form}/>
        <Route path='/otp' component={otp}/>
        <Route path='/crp' component={Crypto}/>
     
        <Route path='/wet' component={Wht}/>
        <Route path='/game' component={Try}/>
        <Route path='/loc' component={loc}/>
        <Route path='/sec' component={Snake}/>
        <Route path='/ad' component={Login}/>
        <Route path='/crpp' component={cry}/>
        <Route path='/home2' component={cryy}/>
        <Route path='/cons' component={cry}/>
    
      </Switch> 
      </store.Provider>  
      </BrowserRouter>, 
      rootElement 
    ); 
    
    
} 
export default App;