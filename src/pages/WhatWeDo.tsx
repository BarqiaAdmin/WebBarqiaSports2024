import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const WhatWeDo = () => {
    return(
        <Container style={{ background: '' }}>
            <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                    <a href='/'>home</a>
                    <a href='WhatWeDo' style={{ textDecoration: 'underline' }}>what we do</a>
                    <a href='AboutUs'>about us</a>
                    <a href='CaseStudies'>case studies</a>
                    <a href=''>contact</a>
                </div>
            </div>
            <img id='logo-inicio-reflejo' src='/img/Logo_Inicio_Reflejo.png' style={{ marginLeft: '40px', position: 'relative', zIndex: '1' }} />

            <img src='/img/about-us.png' style={{ marginTop: '-298px', position: 'relative', width: '100%', zIndex: '0' }} />

            <h1 style={{ background: '#060C17', color: 'white', textAlign: 'center' }} >
                WHAT WE DO
            </h1>
            
            <p style={{ color: 'white' }}>
                We are the leading IMMERSIVE FAN ENGAMENT PLATFORM perfect for clubs, athletes and fans of all sports worldwide. Participate in all the immersive experiences, earn points, get benefits and help to grow your favorite club or athlete.
                Thanks to our cutting-edge technology, this allows us to capture the maximum attention of the fans and create a closer bond between them and their favourite clubs or athletes.
            </p>

            <video autoPlay muted loop >
                <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
            </video>

            <img src='/img/poligonos_3.png' />

            <img src='/img/search-1.png' />

            <img src='/img/search.png' />

            <img src='/img/cascos-1.png' />

            <img src='/img/hackaton-esports.png' />

            <h1>
                <p style={{ color: 'white', textAlign: 'center'}}>
                    ABOUT US
                </p>
            </h1>

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
}

export default WhatWeDo;