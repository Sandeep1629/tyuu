
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import vid1 from './vid1.mp4'

export default function ActionAreaCard() {
  return (
    <center>
    
      <div className='cards'>
    <Card sx={{ maxWidth: 640 }}>
    <CardMedia >
            <Typography  variant='inherit'>
              let us know how to use our Banking services
            </Typography>
            <hr></hr>
      
          <video controls autostart autoPlay src={vid1} type="video/mp4" />
          </CardMedia>
        </Card>
</div>
</center>
  );
}
