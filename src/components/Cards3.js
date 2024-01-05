

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards3(props) {
  return (
    <div className='main2'>
    <Card sx={{ width: 650 }}>
      <CardMedia
        sx={{ height: 650 }}
        image={props.imgSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
     
    </Card>


    </div>
  );
}

