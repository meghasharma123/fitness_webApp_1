import React from "react";
import {Card,Box,CardContent,CardMedia,Typography, Button} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useStyle from './styles';
import {CCardText} from '@coreui/react'

const Consult = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.topname}>
        <Typography variant="h3">Consult</Typography>
        <div className={classes.topside}>
          <NotificationsIcon />
          <div className={classes.topcal}>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </div>
        </div>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Search" name="search"  style={{ height: '45px', width: '70rem', marginLeft: '12rem',borderRadius:'12px' }} />
        </div>
        <div style={{marginTop:'2rem'}}>
          <Button style={{border:'1px solid',backgroundColor:'#5F9DF7',color:'#fff'}}>
            Trainers
          </Button>
          <Button style={{border:'1px solid',backgroundColor:'#5DA7DB',color:'#fff'}}>
            Dieticians
          </Button>
          <Button style={{border:'1px solid',backgroundColor:'#5DA7DB',color:'#fff'}}>
            Therapists
          </Button>
        </div>
        <div className={classes.trainer}>
        <Card sx={{ display: 'flex',height:'15rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 240,height:150 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667074371/about1/640px-Mann_mit_ausgepr%C3%A4gten_Muskeln_am_Arm_l5sxls.jpg"
                alt="Live from space album cover"
              />
            <CCardText style={{display:'flex',flexDirection:'column-reverse'}}><h3><Button style={{border:'2px solid'}}>Book a session</Button></h3></CCardText>
            <Box sx={{ display: 'flex', flexDirection: 'column',height:'150px' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Manish Saxena<br/><br/>
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: '30px',height:'150px' }}>
                  General Fitness Trainer<br/>
                    6 years of experience
              </Box>
            </Box>
        </Card>
        <Card sx={{ display: 'flex',height:'15rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 240,height:150 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1666894811/about1/pic2_pzjbym.avif"
                alt="Live from space album cover"
              />
            <CCardText style={{display:'flex',flexDirection:'column-reverse'}}><h3><Button style={{border:'2px solid'}}>Book a session</Button></h3></CCardText>
            <Box sx={{ display: 'flex', flexDirection: 'column',height:'150px' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Shreya Sharma<br/><br/>
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: '30px',height:'150px' }}>
                  General Fitness Trainer<br/>
                    4 years of experience
              </Box>
            </Box>
        </Card>
        </div>
    </div>
  );
}

export default Consult