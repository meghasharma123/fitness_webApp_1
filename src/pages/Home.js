import React from "react";
import {Card,Box,CardContent,CardMedia,Paper,Typography,Table,TableCell,TableContainer,TableHead,TableRow, Button} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import moment from 'moment';
import ReactApexChart from 'react-apexcharts'
import {CCard,CCardBody,CCardText} from '@coreui/react'
import { TopName,TopSide,TopCal,CalData, CardData, Calories } from './styles';


const Home = () => {
  
  const date = new Date();
  const weekDay = date.getDay();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const state1 = {
    options: {
      chart: {
        foreColor: '#ffffff',
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      labels: ['Water']
    },
  };
  const state2 = {
    options: {
      chart: {
        foreColor: '#ffffff',
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      labels: ['Calories']
    },
  };
  const state3 = {
    options: {
      chart: {
        foreColor: '#ffffff',
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      labels: ['Steps']
    },
  };
  
      return (
      <div>
      <TopName>
        <Typography variant="h4">Hi,Pranav</Typography>
        <TopSide>
          <NotificationsIcon />
          <TopCal>
            <TripOriginIcon/>
            <Typography style={{color:'#fff'}}>245</Typography>
          </TopCal>
        </TopSide>
        </TopName>
        <CalData>
          <TableContainer component={Paper} style={{backgroundColor:'#3C4048'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#fff'}}>{moment().format('DD')}<br/>{days[weekDay]}</TableCell>
            <TableCell style={{color:'#fff'}}>{moment().add(1,'days').format('DD')}<br/>{days[(weekDay+1)%7]}</TableCell>
            <TableCell style={{color:'#fff'}}>{moment().add(2,'days').format('DD')}<br/>{days[(weekDay+2)%7]}</TableCell>
            <TableCell style={{color:'#fff'}}>{moment().add(3,'days').format('DD')}<br/>{days[(weekDay+3)%7]}</TableCell>
            <TableCell style={{color:'#fff'}}>{moment().add(4,'days').format('DD')}<br/>{days[(weekDay+4)%7]}</TableCell>
            <TableCell style={{color:'#fff'}}>{moment().add(5,'days').format('DD')}<br/>{days[(weekDay+5)%7]}</TableCell>
            <TableCell style={{color:'#fff'}}>{moment().add(6,'days').format('DD')}<br/>{days[(weekDay+6)%7]}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
          </TableContainer>
        </CalData>
        <CardData>
        <Typography variant="h5">Today</Typography>
        <Button style={{position:'inherit'}}><Typography variant="contained" style={{position:'absolute',display:'contents'}}>View All</Typography></Button>
        </CardData>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 137 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1666894811/about1/pic2_pzjbym.avif"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Strength Training
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  7 days challenge
              </Box>
            </Box>
        </Card>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 137 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1666894812/about1/pic1_hxzula.avif"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    High Intensity Cardio
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  7 days challenge
              </Box>
            </Box>
        </Card>
        <Card sx={{ display: 'flex',height:'10rem',backgroundColor:'#c7c2c2',borderRadius:'12px',marginTop:'2rem' }}>
          <CardMedia
                component="img"
                sx={{ width: 137 }}
                image="https://res.cloudinary.com/meghacloud/image/upload/v1667066362/images_wdn4iu.jpg"
                alt="Live from space album cover"
              />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Plyometric
                  </Typography>
                </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '24px', pb: 1 }}>
                  7 days challenge
              </Box>
            </Box>
        </Card>
        <Calories>
        <CCard style={{ width: '18rem',backgroundColor:'#c7c2c2',borderRadius:'5%',marginBottom:'1rem' }}>
          <CCardBody>
            <CCardText>
            <ReactApexChart 
                options={state1.options} 
                series={[95]} 
                type="radialBar" 
                height={350} />
            </CCardText>
            <CCardText>Glasses of water</CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: '18rem',backgroundColor:'#c7c2c2',borderRadius:'5%',marginBottom:'1rem' }}>
          <CCardBody>
            <CCardText>
            <ReactApexChart 
                options={state2.options} 
                series={[50]} 
                type="radialBar" 
                height={350} />
            </CCardText>
            <CCardText>Calories Burned</CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: '18rem',backgroundColor:'#c7c2c2',borderRadius:'5%',marginBottom:'1rem' }}>
          <CCardBody>
            <CCardText>
            <ReactApexChart 
                options={state3.options} 
                series={[60]} 
                type="radialBar" 
                height={350} />
            </CCardText>
            <CCardText>Steps</CCardText>
          </CCardBody>
        </CCard>
        </Calories>
      </div>
    );
  }

export default Home;