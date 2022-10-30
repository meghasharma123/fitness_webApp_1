import React from "react";
import {Typography,Button} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useStyle from './styles';
import {CCard,CCardBody,CCardImage,CCardText} from '@coreui/react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Discover = () => {
  const classes = useStyle();
    return (
      <div>
        <div className={classes.topname}>
        <Typography variant="h3">Discover</Typography>
        <div className={classes.topside}>
          <NotificationsIcon />
          <div className={classes.topcal}>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </div>
        </div>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Article,Exercise,Diets" name="search"  style={{ height: '45px', width: '70rem', marginLeft: '12rem',borderRadius:'12px' }} />
        </div>
        <div className={classes.calories}>
        <Stack direction="row" spacing={1}>
          <Chip label="Fiber" variant="outlined" />
          <Chip label="Planks" variant="outlined" />
          <Chip label="Plyometric" variant="outlined" />
          <Chip label="Strength" variant="outlined" />
          <Chip label="Hit" variant="outlined" />
          <Chip label="electrolytes" variant="outlined" />
          <Chip label="Protein" variant="outlined" />
        </Stack>
        </div>
        <div className={classes.card}>
          <Typography variant="h5">Exercises</Typography>
          <Button><Typography variant="contained">View More</Typography></Button>
        </div>
        <div className={classes.calories}>
        <CCard style={{ width: '18rem'}}>
          <CCardBody>
            <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667073079/about1/Fitness_Model_Britt_2007_ytcfc2.jpg" height={450}/>
            <CCardText style={{position:'absolute',top:'43rem',marginLeft:'7rem',color:'#fff'}}>
             5 exrcise for<br/> back pain relief
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: '18rem'}}>
          <CCardBody>
            <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667074371/about1/640px-Mann_mit_ausgepr%C3%A4gten_Muskeln_am_Arm_l5sxls.jpg" height={450}/>
            <CCardText style={{position:'absolute',top:'43rem',marginLeft:'7rem',color:'#fff'}}>
             11 tips for<br/> working outdoor
            </CCardText>
          </CCardBody>
        </CCard>
       <CCard style={{ width: '18rem'}}>
          <CCardBody>
            <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667073831/about1/fitness-goals-1_vxfsxi.jpg" height={450}/>
            <CCardText style={{position:'absolute',top:'43rem',marginLeft:'7rem',color:'#fff'}}>
             4 Heatlthy<br/> vegetarian recipe
            </CCardText>
          </CCardBody>
        </CCard>
        </div>
      </div>
    );
  }

export default Discover;