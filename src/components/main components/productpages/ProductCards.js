import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductCards(props) {
    return (
        <Card sx={{ maxWidth: 345,minWidth:340,margin:'2vh auto'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}
