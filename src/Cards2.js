

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards2(props) {
  return (
    <div className='main2'>
    <Card sx={{ width: 800 }}>
      <CardMedia
        sx={{ height: 600 }}
        image={props.imgSrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
     
    </Card>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     <div>
    <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry.</p>
    <h2> Winter Discount <br/> Up to 30%</h2>
    <br/> <br/> <br/>
    <p> It is a long  established fact that a reader will be distracted <br/> by the readable content of a page when looking its <br/> layout. </p>
    <button className='button1'> SHOP NOW</button>



     </div>

    </div>
  );
}

