import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import beauty from '../../images/beautyfull-girl.png'

const Header = () => {
    return (
        <Container style={{ height: '600px', backgroundColor: '#EDC6CE'}} sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2} marginTop={'10px'} height={'300px'}>

                <Grid item xs={12} md={6} sm={4}>
                 <Box style={{ width: '500px', height: '500px',textAlign: 'left',marginLeft:'25px',marginTop:'110px'}}>
                 <Typography variant='h3' sx={{fontWeight:'500' ,mb:2}}>BEAUTY SALON FOR EVERY WOMEN</Typography>
                    <Typography sx={{mb:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde veritatis laborum voluptatem harum vitae accusantium obcaecati modi a cupiditate!</Typography>
                    <Button variant="contained" sx={{background:'#EE1832'}}>Get an Appointment</Button>
                 </Box>
                </Grid>
                <Grid item xs={12} md={6} sm={4}>
                    <img src={beauty} alt="" style={{ width: '500px', height: '500px' }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Header;