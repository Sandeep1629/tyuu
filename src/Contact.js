import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import bankuu from "./assets/bankuu.png"
import "./Contact.css"

export default function ActionAreaCard() {
  return (
    <center>
      <div className='sandy'>
    <Card sx={{ maxWidth: 455 }}>
   
        <CardMedia
          component="img"
          height="100"
          image={bankuu}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Customer Support 24X7
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email support :bank@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Toll free : 18000555458
          </Typography>
       

        </CardContent>
    
    </Card>
    </div>
    </center>
  );
}
