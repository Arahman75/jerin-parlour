import {  Button, Grid, Paper, Typography } from '@mui/material';


import React from 'react';

const Service = ({service}) => {
   const {img,name, price, description} = service;
    return (
        
       
         <Grid item xs={8} sm={6} md={4} sx={{textAlign:'center', alignItems:'center'}}>
<Paper elevation={3}>
<img src={img} alt="" style={{height:'72px', paddingTop:'25px'}} />
<Typography sx={{p:1, fontSize: 18, fontWeight:'700'}}>
  {name}
</Typography>
<Typography sx={{fontSize: 18, fontWeight:'600',color:'#FFFFFF'}}>
  {price}
</Typography>
<Typography variant='h6' sx={{p:3, fontSize:14}}>
  {description}
</Typography>
</Paper>
<Typography sx={{py:4}}>
<Button variant="contained" sx={{background:'#EE1832'}}>Explore More</Button>
</Typography>

        </Grid>
     
       
       
    );
};

export default Service;