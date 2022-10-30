import React from "react";
import {Card,Box,CardContent,CardMedia,Typography, Button} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useStyle from './styles';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Routines = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.topname}>
        <Typography variant="h3">My routines</Typography>
        <div className={classes.topside}>
          <NotificationsIcon />
          <div className={classes.topcal}>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </div>
        </div>
      </div>
      <Typography style={{display:'flex',marginLeft:'2rem'}}>Ongoing</Typography>
      <div className={classes.routine}>
      <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'50rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 240 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667080929/about1/p09wr20h_lzjrj4.jpg"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Summer Yoga
                  </Typography>
                  20 min Full body
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  
                    Days Completed :  21/30
                    <Button style={{border:'2px solid',marginLeft:'2rem'}}>Continue</Button>
              </Box>
            </Box>
      </Card>
      <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'50rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 240 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1666894812/about1/pic1_hxzula.avif"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Total Arm
                  </Typography>
                  30 min Full body
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  
                    Days Completed :  11/30
                    <Button style={{border:'2px solid',marginLeft:'2rem'}}>Continue</Button>
              </Box>
            </Box>
      </Card>
      </div>
      <div>
        <Button style={{border:'2px solid',marginTop:'2rem',width:'40rem',height:'50px',marginLeft:'20rem'}}>
          <AddBoxIcon/> Add a routine
        </Button>
      </div>
    </div>
  )
}

export default Routines