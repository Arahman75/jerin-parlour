import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Service from '../Service/Service';
import group1 from '../../Icon/Group 1.png';
import group2 from '../../Icon/Group 2.png';
import group3 from '../../Icon/Group 3.png';



const services = [
    {
        id: 1,
        img: group1,
        name: 'Anti Age Face Treatment',
        price: '$199',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga quam ratione explicabo magni iusto debitis quisquam excepturi fugiat laudantium.',
    },
    {
        id: 2,
        img: group2,
        name: 'Hair Color & Styling',
        price: '$99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga quam ratione explicabo magni iusto debitis quisquam excepturi fugiat laudantium.',
    },
    {
        id: 3,
        img: group3,
        name: 'Skin Care Treatment',
        price: '$299',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga quam ratione explicabo magni iusto debitis quisquam excepturi fugiat laudantium.',
    }

]


const Services = () => {
    return (
        <Container style={{ height: '600px', backgroundColor: '#F6F5F4' }}>
            <Box>
                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '500', pt: 10, pb: 6 }}>Our Awesome <small style={{ color: '#CC1B06' }}>Services</small></Typography>
            </Box >
            <Grid container spacing={2}>

                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    >

                    </Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;