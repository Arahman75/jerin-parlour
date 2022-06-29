import { Box, Button, Container, Grid, TextareaAutosize, TextField, Typography, withTheme } from '@mui/material';
import React from 'react';
import screen from '../../images/screenColor.png';


const HandleForm = () => {
    return (
        <Container style={{ height: '530px', backgroundColor: '#FFF8F5' }} sx={{ flexGrow: 1, p: 3 }}>
        <Box>
            <Typography variant='h5' sx={{textAlign:'center',my:6,fontWeight:'600'}}>Let us handle your<br></br> project, Professionally.</Typography>
        </Box>
        <Box sx={{mx:40}}>
        <form action="">
       
       <TextField
        sx={{background:'white',width:'46%',m:1}}
        id="outlined-size-small"
        defaultValue="First name"
        size="small"
      />
       <TextField
      sx={{background:'white',width:'47%',m:1}}
        id="outlined-size-small"
        defaultValue="Last name"
        size="small"
      />
      <br></br>
       <TextField
        sx={{background:'white',width:'46%',m:1}}
        id="outlined-size-small"
        defaultValue="Email address"
        
        size="small"
      />
       <TextField
        sx={{background:'white',width:'47%',m:1}}
        id="outlined-size-small"
        defaultValue="Phone number"
        size="small"
      />
      <br></br>
      <TextareaAutosize
       sx={{background:'white',m:1}}
    aria-label="minimum height"
    minRows={3}
    placeholder="Your message"
     style={{ width: 445 ,height:100,margin:'8px'}}
  />
  <Typography sx={{py:2}}>
<Button variant="contained" sx={{background:'#EE1832',justifyContent:'center',ml:20}}>Send message</Button>
</Typography>
      </form>
     
        </Box>
    </Container>
    );
};

export default HandleForm;