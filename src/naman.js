import React from 'react';
import loginpage from "./loginpage.png"
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material'
import { AppBar, Toolbar,Typography,Icon,Button ,Stack, Avatar} from '@mui/material';
import { green, grey, lightGreen, } from '@mui/material/colors';
import Navbarlogo from './Navbarlogo.jpg'

function Navbar() {
    



  return (
    
    <AppBar position="static" sx={{bgcolor:green[500],justifyContent:'center'}}>
      <Toolbar>
        <Icon sx={{ fontSize: 100,paddingTop: "15px" }} >
        <img src={Navbarlogo} alt="hello"/>
        </Icon>
        <Typography variant="h5" style={{ flexGrow: 1,paddingLeft:"10px"} }>
          E-Waste Scout
        </Typography >
        <Stack direction='row' spacing={2}>
        <Button variant="text" sx={{fontSize:"1rem",color:grey[50],}} >About</Button>
        <Button variant="text" color="success" sx={{fontSize:"1rem",color:grey[50]}} >E-CAL</Button>
        <Button variant="text" color="success" sx={{fontSize:"1rem",color:grey[50]}} >Learn & Explore</Button>
        <Button variant="contained"  size="large"sx={{fontSize:"1rem",color:grey[900],background:lightGreen[500]}}>LOCATE E-WASTE FACILITY</Button>
        <Avatar alt="Remy Sharp" src={loginpage} sx={{ width: 56, height: 56 }}/>
      </Stack>
       
         {/* <FormLabel className={classes.labelRoot}>Hover Me!</FormLabel> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
