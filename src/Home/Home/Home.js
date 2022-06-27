import { Container } from '@mui/system';
import React from 'react';
import Footer from '../../Pages/Footer/Footer';
import Header from '../../Pages/Header/Header';
import Navigation from '../../Pages/Navigation/Navigation';
import Services from '../../Pages/Services/Services';

const Home = () => {
    return (
        <Container >
            
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
       </Container>
    );
};

export default Home;