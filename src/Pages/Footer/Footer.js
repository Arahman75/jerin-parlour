import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

const Footer = () => {
    return (
        <Container style={{height:'420px',backgroundColor:'#F63E7B'}}>
<Box sx={{flexGrow: 1}}>
    <Grid container spacing={2} >
<Grid item xs={4} >
   <Box style={{display:'flex',marginTop:'50px'}}>
   <Typography sx={{ml:5 ,fontSize:'15px',mr:2,color:'#FFFFFF'}}>
    <FmdGoodOutlinedIcon/>
    </Typography>
<Typography variant='h6' sx={{fontSize:'14px',color:'#FFFFFF'}}>

H#000(0th Flour)Road, #00,<br></br>
New DOSH,Mahakhali,Dhaka,Bangladesh.
    
</Typography>
   </Box>
</Grid>
<Grid item xs={2}>
<Typography variant='h4' sx={{fontSize:'25px',color:'#FFFFFF',mt:3,pb:2}}>
    Company
</Typography>
<Typography sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    About
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    Project
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
   Our Team
</Typography>
<Typography sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
   Terms Conditions
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    Submit listing
</Typography>
</Grid>
<Grid item xs={2}>
<Typography variant='h4' sx={{fontSize:'25px',color:'#FFFFFF',mt:3,pb:2}}>
    Quick Links
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    Quick Links
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    Rental
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
   Sales
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    Quick Links
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
    Contact
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
   Our blog
</Typography>
</Grid>
<Grid item xs={4}>
<Typography variant='h4' sx={{fontSize:'25px',color:'#FFFFFF',mt:3,pb:2}}>
   About us
</Typography>
<Typography  sx={{color:'#FFFFFF',fontSize:'16px', my:1}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem veniam adipisci eveniet. 
</Typography>
<Box sx={{color:'#FFFFFF',fontSize:'20px', my:3,display:'flex'}}>
<Typography  sx={{mr:3}}>
  <FacebookOutlinedIcon/>
  </Typography>
  <Typography sx={{mr:3}}>
  <InsertPhotoOutlinedIcon/>
 </Typography>
 <Typography sx={{mr:3}}>
 < SubscriptionsOutlinedIcon/>
 </Typography>
 <Typography>
  <FmdGoodOutlinedIcon/>
 </Typography>
</Box>
</Grid>
<Grid item xs={12}>
<Box >
            <Typography variant='h5' sx={{textAlign:'center',mt:4,fontWeight:'500',color:'#FFFFFF'}}>Copy right 2022 all content reserve,visit our side.</Typography>
        </Box>
</Grid>

    </Grid>

</Box>
        </Container>
    );
};

export default Footer;