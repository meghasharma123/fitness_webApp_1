import React from "react";
import {Card,Box,CardContent,CardMedia,Typography, Button} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useStyle from './styles';
import {CCard,CCardBody,CCardImage,CCardText} from '@coreui/react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Spaces = () => {
  const classes = useStyle();

    return (
      <div>
        <div className={classes.topname}>
        <Typography variant="h3">Spaces</Typography>
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
          <Typography style={{display:'flex',margin:'2rem'}}>Exercise with friends</Typography>
          {/* Cards for friends */}
        <div style={{marginLeft:'10rem',display:'flex',justifyContent:'space-around'}}>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'30rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 150,borderRadius:'50%' }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667074371/about1/640px-Mann_mit_ausgepr%C3%A4gten_Muskeln_am_Arm_l5sxls.jpg"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Abhishek
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  15 streaks
              </Box>
            </Box>
        </Card>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'30rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 150,borderRadius:'50%' }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667073831/about1/sooraj-pancholi_1200_insta_untddt.jpg"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Lakshay
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  05 streaks
              </Box>
            </Box>
        </Card>
        </div>
        <div style={{marginLeft:'10rem',display:'flex',justifyContent:'space-around'}}>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'30rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 150,borderRadius:'50%' }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1666894811/about1/pic2_pzjbym.avif"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Khusinid
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  07 streaks
              </Box>
            </Box>
        </Card>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem',maxWidth:'30rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 150,borderRadius:'50%' }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667073831/about1/fitness-goals-1_vxfsxi.jpg"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Salonidi
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  10 streaks
              </Box>
            </Box>
        </Card>
        </div>
        {/* Cards for Events */}
        <CCard style={{margin:'8rem',backgroundColor:'#B2B2B2',borderRadius:'12px',maxWidth:'50rem',marginLeft:'25rem'}}>
          <CCardBody>
            <CCardText>
             <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667076686/about1/Health-and-Fitness-Class-Guide_ciatt1.jpg" style={{height:'20rem',width:'50rem',border:'5px rgba(0, 0, 0, 0.26) solid',borderRadius:'12px'}}></CCardImage>
            </CCardText>
            <CCardText>Yoga for beginners</CCardText>
            <CCardText>
              <CalendarMonthIcon/> Nov 1,2022 , 10:00 AM , for 2 hr
            </CCardText>
            <CCardText>
                <Button><Typography variant="h6" style={{border:'2px solid',color:'#fff',padding:'6px'}}>Attend</Typography></Button>
            </CCardText>
          </CCardBody>
        </CCard>
      </div>
    );
  }

export default Spaces;