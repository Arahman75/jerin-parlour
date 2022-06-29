import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import screen from '../../images/screenColor.png';

const ScreenTreatment = () => {
    return (
        <Container style={{ height: '500px', backgroundColor: '#FFF8F5' }} sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2} marginTop={'30px'} height={'300px'}>
                <Grid item xs={12} md={6} sm={4}>
                    <img src={screen} alt="" style={{ width: '500px', height: '350px' }} />
                </Grid>
                <Grid item xs={12} md={6} sm={4}>
                    <Box style={{textAlign:'left',marginLeft:'40px'}}>
                        <Typography variant='h4' sx={{ fontWeight: '600', mb: 2 }}>Let us handle your <br></br>screen <small style={{ color: '#CC1B06' }}>Professionally.</small></Typography>
                        <Typography sx={{ mb: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde veritatis laborum voluptatem harum vitae accusantium obcaecati modi a cupiditate!. Dolore unde veritatis laborum voluptatem harum vitae </Typography>
                       
                    </Box>
                  <Box style={{display:'flex',textAlign:'left'}}>
                  <Box sx={{m:2,pl:3,pr:2}}>
                        <Typography variant='h4' style={{color: '#CC1B06',fontWeight: '600',paddingBottom:'15px'}}>500+</Typography>
                        <Typography>Happy Customer</Typography>
                        
                    </Box >
                    
                       <Box sx={{m:2,pl:6}} >
                       <Typography variant='h4' style={{color: '#CC1B06',fontWeight: '600',paddingBottom:'15px'}}>16+</Typography>
                        <Typography>Total Service</Typography>
                       </Box>
                  
                  </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default ScreenTreatment;