import image from "./assets/moneyTransfer.svg"; 
import "./Money.css"; 
import Form from "./form"; 
import Transaction from "./Transaction"
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
 
const Money = () => { 
  return ( 
    
    <div className="money"> 
     
      <div className="money__left"> 
      
        <div className="money__image"> 
         <Link to="/home"> <img src={image} alt="" /></Link> 
         <Typography class="tyuu">Transfer your money safely</Typography>
        </div> 
      </div> 
      <div className="money__right"> 
     <Transaction/>
      </div> 
    </div> 
  ); 
}; 
 
export default Money; 