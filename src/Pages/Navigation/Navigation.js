import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../images/jerinNav.png';
import { Container } from '@mui/system';

const Navigation = () => {
    return (
       
      
          <Container sx={{ flexGrow: 1 }}>
           
           <AppBar position="static" >
             <Toolbar>
              <Box style={{display: 'flex' }}>
             <Box>
             <img src={logo} alt=""style={{height:'50px',marginRight: '10px', marginTop: '7px'}} />
             </Box>
               <Typography variant='h6' style={{fontSize: '15px'}}>
                   <small style={{fontSize: '20px'}}>Jerin's</small> <br></br>Parlour
               </Typography>
              </Box>
               <Typography variant="h6"  sx={{ flexGrow: 1 ,textAlign:'right'}}>
              
              <Button color="inherit">   Home</Button>
               <Button color="inherit">  Our portfolio</Button>
               <Button color="inherit">  Our Team</Button>
               <Button color="inherit"> Contact Us</Button>
               <Button color="inherit">Login</Button> </Typography>
             </Toolbar>
           </AppBar>
          
         
        </Container>
      
    );
};

export default Navigation;