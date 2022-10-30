import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  topname: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  topside: {
    display: 'flex',
    margin : '2rem'
  },
  topcal : {
    marginLeft : '1rem',
    boxSizing:'border-box',
    border: '1px white solid',
    backgroundColor:'grey',
    display:'flex',
    padding:'5px',
    borderRadius:'6px',
    marginTop : '-8px'
  },
  table:{
    backgroundColor: '#3C4048',
  },
  card:{
    display:'flex',
    justifyContent: 'space-between',
    padding: '15px'
  },
  calories:{
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop:'2rem'
  },
  trainer:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    maxWidth:'40rem',
    marginLeft:'30rem'
  },
  routine:{
    marginLeft:'30rem'
  }
  }
));