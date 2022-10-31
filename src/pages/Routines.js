import React from "react";
import {Card,Box,CardContent,CardMedia,Typography, } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button, AddRoutine,TopCal, TopName, TopSide,Routine } from './styles';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Routines = () => {

  return (
    <div>
      <TopName>
        <Typography variant="h4">Routine</Typography>
        <TopSide>
          <NotificationsIcon />
          <TopCal>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </TopCal>
        </TopSide>
        </TopName>
      <Typography style={{display:'flex',marginLeft:'2rem'}}>Ongoing</Typography>
      <Routine>
      <Card sx={{ display: 'flex',height:'15rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'fit-content',padding:'10px' }}>
          <CardMedia
                component="img"
                sx={{ width: 110 }}
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
              </Box>
              <Button style={{border:'2px solid',marginLeft:'1rem'}}>Continue</Button>
            </Box>
      </Card>
      <Card sx={{ display: 'flex',height:'15rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'fit-content',padding:'10px' }}>
          <CardMedia
                component="img"
                sx={{ width: 110 }}
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
              </Box>
              <Button style={{border:'2px solid',marginLeft:'1rem'}}>Continue</Button>
            </Box>
      </Card>
      </Routine>
      <AddRoutine>
           Add a routine <AddBoxIcon/>
      </AddRoutine>
    </div>
  )
}

export default Routines