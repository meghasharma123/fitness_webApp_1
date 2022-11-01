import React from "react";
import {Typography,Button} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {CCard,CCardBody,CCardImage} from '@coreui/react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Input,SearchBox, Calories, CardData, TopCal, TopName, TopSide } from "./styles";

const Discover = () => {
    return (
      <div>
        <TopName>
        <Typography variant="h4">Discover</Typography>
        <TopSide>
          <NotificationsIcon />
          <TopCal>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </TopCal>
        </TopSide>
        </TopName>
        <SearchBox>
          <Input type="text" placeholder="Article,Exercise,Diets" name="search"  style={{ height: '45px',width:'25rem', borderRadius:'12px',padding:'15px',alignItems:'center' }} />
        </SearchBox>
        <Calories>
        <Stack direction="row" spacing={1}>
          <Chip label="Planks" variant="outlined" />
          <Chip label="Fiber" variant="outlined" />
          <Chip label="Hit" variant="outlined" />
          <Chip label="Protein" variant="outlined" />
        </Stack>
        </Calories>
        <CardData>
          <Typography variant="h5">Exercises</Typography>
          <Button style={{position:'inherit'}}><Typography variant="contained" style={{position:'absolute',display:'contents'}}>View More</Typography></Button>
        </CardData>
        <Calories>
        <CCard style={{ width: '18rem',marginBottom:'1rem'}}>
          <CCardBody>
            <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667073079/about1/Fitness_Model_Britt_2007_ytcfc2.jpg" height={350} width={250} />
          </CCardBody>
        </CCard>
        <CCard style={{ width: '18rem',marginBottom:'1rem'}}>
          <CCardBody>
            <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667074371/about1/640px-Mann_mit_ausgepr%C3%A4gten_Muskeln_am_Arm_l5sxls.jpg" height={350} width={250} />
          </CCardBody>
        </CCard>
       <CCard style={{ width: '18rem',marginBottom:'1rem'}}>
          <CCardBody>
            <CCardImage src="https://res.cloudinary.com/meghacloud/image/upload/v1667073831/about1/fitness-goals-1_vxfsxi.jpg" height={350} width={250} />
          </CCardBody>
       </CCard>
        </Calories>
      </div>
    );
  }

export default Discover;