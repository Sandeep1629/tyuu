import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ActionAreaCard() {
  return (
    <center>
      <div className='cards'>
    <Card sx={{ maxWidth: 455 }}>
   
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Thank You , issue has been submitted to our manager.is will resolve soon.
          </Typography>
         
       

        </CardContent>
    
    </Card>
    </div>
    </center>
  );
}
