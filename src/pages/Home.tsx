import React from 'react';

import './Home.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const Home = () => (
    <Container id='home-container'>
        <img id='navbar-laser' src='/img/navbar_laser.png' />
        <div id='nav-bar' style={{ padding: '20px 30px'}}>
            <div style={{ display: 'inline-block' }}>
                <img src='/img/barqia-symbol.png' />
            </div>
            <div style={{ float: 'right' }}>
                <a href='/' style={{ textDecoration: 'underline' }}>home</a>
                <a href='WhatWeDo'>what we do</a>
                <a href='WhatWeDo'>about us</a>
                <a href=''>case studies</a>
                <a href=''>contact</a>
            </div>
        </div>
        <img id='logo-inicio-reflejo' src='/img/Logo_Inicio_Reflejo.png' style={{ marginLeft: '40px' }} />

        <h1 style={{ background: '#171618', color: 'white', textAlign: 'center' }} >
            WELCOME TO BARQIA
        </h1>
        <video autoPlay muted loop style={{ width: '100%' }} >
            <source src="video/Video_BarqIA_Promo.mp4" type="video/mp4" />
        </video>
        <Container style={{ position: 'relative' }}>
            <img src='/img/poligonos.png' style={{ position: 'absolute', top: '0', width: '100%', zIndex: '0' }} />
            <div id='barqia-symbol-gif-container' style={{ textAlign: 'center', position: 'relative', zIndex: '1' }}>
                <img src='/img/barqia-symbol-gif.gif' style={{ marginTop: '-100px' }} />
            </div>
            <p style={{ marginTop: '-90px', position: 'relative', zIndex: '1' }}>
                Feel the passion for sports in a more immersive way. Interact with your sports entity and move up levels where you can grow your club and your passion. Live the emotion with Barqia Sports. <br />
                We are passionate about sports and technology. Barqia Sports wants to deliver you a more interactive and technological way to continue living sports to spread the same passion to you.
            </p>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: '1' }}>
                <img src='/img/home-1.PNG' />
            </div>
            <p style={{ position: 'relative', zIndex: '1' }}>
                The immersive platform that offers fans the opportunity to create a closer bond with athletes and sports entities. Offer innovative and technological services to your fans and they will return it to you.
            </p>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: '1' }}>
                <img src='/img/home-2.PNG' />
            </div>
            <p style={{ position: 'relative', zIndex: '1' }}>
                The immersive platform that offers fans the opportunity to create a closer bond with athletes and sports entities. Offer innovative and technological services to your fans and they will return it to you.
            </p>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: '1' }}>
                <img src='/img/home-3.PNG' />
            </div>
        </Container>

        <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2' }}>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <img className='hide-on-mobile' src='/img/barqia-symbol.png' style={{ width: '75px' }} />
                </Col>
            </Row>
            <hr style={{ margin: '40px 0' }} />
            <Row id='barqia-social-networks'>
                <Col style={{ textAlign: 'center' }}>
                    <a target="_blank" href='https://www.youtube.com/@barqiasports'><img src='/img/icon-youtube.png' style={{ filter: 'brightness(0) invert(1)', width: '37px' }} /></a>
                    <a target="_blank" href='https://www.linkedin.com/company/barqiasports/?originalSubdomain=es'><img src='/img/icon-linkedin.png' style={{ filter: 'brightness(0) invert(1)', margin: '0 40px', marginTop: '-10px', width: '37px' }} /></a>
                    <a target="_blank" href='https://www.instagram.com/barqiasports/'><img src='/img/icon-instagram.png' style={{ filter: 'brightness(0) invert(1)', width: '37px' }} /></a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={{ color: 'white', fontSize: '15px', marginTop: '45px', textAlign: 'center' }}>
                        2023 Barqia - All Rights Reserved.
                    </p>
                </Col>
            </Row>
        </Container>
    </Container>
)

export default Home;