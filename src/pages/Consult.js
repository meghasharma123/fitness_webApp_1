import React from "react";
import {Card,Box,CardContent,CardMedia,Typography} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { SearchBox,Input,TopCal, TopName, TopSide, Trainer,Button } from "./styles";

const Consult = () => {
  return (
    <div>
      <TopName>
        <Typography variant="h4">Consult</Typography>
        <TopSide>
          <NotificationsIcon />
          <TopCal>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </TopCal>
        </TopSide>
        </TopName>
        <SearchBox>
          <Input type="text" placeholder="Article,Exercise,Diets" name="search"  style={{ height: '45px', width: '70rem', marginLeft: '12rem',borderRadius:'12px',padding:'15px' }} />
        </SearchBox>
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
        <Trainer>
        <Card sx={{ display: 'flex',height:'17rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 110,height:150 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667074371/about1/640px-Mann_mit_ausgepr%C3%A4gten_Muskeln_am_Arm_l5sxls.jpg"
                alt="Live from space album cover"
              />
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
              <h3><Button style={{border:'2px solid'}}>Book a session</Button></h3>
            </Box>
        </Card>
        <Card sx={{ display: 'flex',height:'17rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 110,height:150 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1666894811/about1/pic2_pzjbym.avif"
                alt="Live from space album cover"
              />
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
              <h3><Button style={{border:'2px solid'}}>Book a session</Button></h3>
            </Box>
        </Card>
        </Trainer>
    </div>
  );
}

export default Consult