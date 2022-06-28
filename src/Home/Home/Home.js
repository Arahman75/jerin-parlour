import { Container } from '@mui/system';
import React from 'react';
import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header/Header';
import Navigation from '../../Pages/Navigation/Navigation';
import ScreenTreatment from '../../Pages/ScreenTreatment/ScreenTreatment';
import Services from '../../Pages/Services/Services';
import Testimonials from '../../Pages/Testimonials/Testimonials';

const Home = () => {
    return (
        <Container >
            
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <ScreenTreatment></ScreenTreatment>
            <Testimonials></Testimonials>
            <Footer></Footer>
       </Container>
    );
};

export default Home;