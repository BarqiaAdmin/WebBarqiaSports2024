import React from 'react';

import './WhatWeDo.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const WhatWeDo = () => {
    return(
        <Container id='container-what-we-do'>
            <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                    <a href='/'>home</a>
                    <a href='AboutUs'>about us</a>
                    <a href='WhatWeDo' className='nav-bar-selected-link' >what we do</a>
                    <a href='CaseStudies'>case studies</a>
                    <a href='Contact'>contact</a>
                </div>
            </div>
            <Container style={{ position: 'relative' }}>
                <Row>
                    <Col>
                        <div>
                            <img id='img-about-us' src='/img/about-us.png' />
                        </div>

                        <div style={{display: 'inline-block', width: '60%'}}>
                            <h1 id='h1-welcome-to-barqia' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '-5px', textAlign: 'center' }} >
                                WHAT WE DO
                            </h1>

                            <p style={{ color: 'white', lineHeight: '48px' }}>
                                We are the leading IMMERSIVE FAN ENGAMENT PLATFORM perfect for clubs, athletes and fans of all sports worldwide. Participate in all the immersive experiences, earn points, get benefits and help to grow your favorite club or athlete.
                                Thanks to our cutting-edge technology, this allows us to capture the maximum attention of the fans and create a closer bond between them and their favourite clubs or athletes.
                            </p>
                        </div>
                        

                        <div style={{ display: 'inline-block', textAlign: 'center'}}>
                            <video autoPlay muted loop style={{width: '100%'}}>
                                <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
                            </video>
                        </div>
                        
                        <div>
                            <img src='/img/poligonos_3.png' style={{ width: '100%'}} />
                        </div>
                        
                        <div style={{position: 'relative', textAlign: 'center'}}>
                            <img id='img-search-1' src='/img/search-1.png' style={{ marginBottom: '50px', width: '70%'}} />
                            <div>
                                <img id='img-search' src='/img/search.png' />
                            </div>

                            <div style={{display: 'inline-block', width: '50%'}}>
                                <img id='img-cascos-1' src='/img/cascos-1.png' style={{ marginRight: '-70px', width: '70%'}} />
                                <p style={{color: 'white', fontSize: '35px', textAlign: 'center', width: '100%'}}>
                                    Technology consulting
                                </p>
                            </div>
                            
                            <div style={{display: 'inline-block', width: '50%'}}>
                                <img id='img-hackaton-esports' src='/img/hackaton-esports.png' style={{ marginLeft: '-70px', width: '70%'}} />
                                <p style={{color: 'white', fontSize: '35px', textAlign: 'center', width: '100%'}}>
                                    <span style={{marginLeft: '-130px'}}>Events</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2' }}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <div id='barqia-symbol-gif-container' style={{ textAlign: 'center', position: 'relative', zIndex: '1' }}>
                            <img id='barqia-footer-gif' src='/img/barqia-symbol-gif.gif' />
                        </div>
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