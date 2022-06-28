import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ellips1 from '../../images/Ellipse 90.png';
import ellips2 from '../../images/Ellipse 91.png';
import ellips3 from '../../images/Ellipse 92.png';


const Testimonials = () => {
    return (
        <Container style={{ height: '500px', backgroundColor: '#FFFFFF' }}>
            <Box>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '600', pt: 10, pb: 6 }}>Testimonials</Typography>
            </Box >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{px:3}}>
                        <Box style={{ display: 'flex' }}>
                            <Box>
                                <img src={ellips1} alt="" style={{ height: '70px', marginRight: '20px', marginTop: '7px' }} />
                            </Box>
                            {/* <Typography variant='h6' style={{fontSize: '15px'}}>
                   <small style={{fontSize: '20px'}}>Jerin's</small> <br></br>Parlour
               </Typography> */}
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant='h6' style={{ fontSize: '20px', fontWeight: '600' }}>Nash Patrik</Typography>
                                <Typography variant='h6' style={{ fontSize: '15px' }}>CEO,Manpol</Typography>

                            </Box>
                        </Box>
                        <Typography sx={{ py: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odit harum, error culpa ut sunt impedit repellat earum quaerat atque!</Typography>

                        <Typography sx={{ color: '#FFC300' }}>

                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{px:3}}>
                        <Box style={{ display: 'flex' }} >
                            <Box>
                                <img src={ellips2} alt="" style={{ height: '70px', marginRight: '20px', marginTop: '7px' }} />
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant='h6' style={{ fontSize: '20px', fontWeight: '600' }}>Miriam Barron</Typography>
                                <Typography variant='h6' style={{ fontSize: '15px' }}>CEO,Manpol</Typography>

                            </Box>
                        </Box>
                        <Typography sx={{ py: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odit harum, error culpa ut sunt impedit repellat earum quaerat atque!</Typography>

                        <Typography sx={{ color: '#FFC300' }}>

                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{px:3}}>
                        <Box style={{ display: 'flex' }}>
                            <Box>
                                <img src={ellips3} alt="" style={{ height: '70px', marginRight: '20px', marginTop: '7px' }} />
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant='h6' style={{ fontSize: '20px', fontWeight: '600' }}>Bria Malone</Typography>
                                <Typography variant='h6' style={{ fontSize: '15px' }}>CEO,Manpol</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ py: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odit harum, error culpa ut sunt impedit repellat earum quaerat atque!</Typography>

                        <Typography sx={{ color: '#FFC300' }}>

                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                        </Typography>
                    </Grid>

                </Grid>
                {/* <Grid item xs={4}>
        <Typography>Outlined</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteOutlinedIcon />
        <DeleteForeverOutlinedIcon />
        
      </Grid> */}
            </Box>
        </Container>

    );
};

export default Testimonials;