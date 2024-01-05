import React from 'react';

import './WhatWeDo.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const WhatWeDo = () => {
    return(
        <Container fluid id='container-what-we-do'>
            <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
            <div id='nav-bar' style={{ padding: '20px 30px' }} >
                <div id='nav-bar' style={{ padding: '20px 30px'}}>
                    <div style={{ display: 'inline-block' }}>
                        <img src='/img/barqia-symbol.png' />
                    </div>
                    <div style={{ float: 'right' }}>
                        <a href='/' className='nav-bar-selected-link' >home</a>
                        <a href='AboutUs'>about us</a>
                        <a href='WhatWeDo'>what we do</a>
                        <a href='CaseStudies'>case studies</a>
                        <a href='Contact'>contact</a>
                    </div>
                </div>

                

                <Navbar id='menu-hamburguesa' expand="lg" className="bg-body-tertiary" style={{ display: 'none' }}>
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
            <Container style={{ position: 'relative' }}>
                <Row>
                    <Col>
                        <div>
                            <img id='img-home-2' src='/img/home-2.PNG' style={{ width: '100%' }} />
                        </div>

                        <div id='segundo-container' style={{display: 'inline-block' }}>
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
                            <img id='img-search-1' src='/img/search-1.png' style={{ marginBottom: '35px', width: '70%'}} />
                            <div>
                                <img id='img-search' src='/img/search.png' />
                            </div>

                            <div style={{display: 'inline-block', width: '50%'}}>
                                <img id='img-cascos-1' src='/img/cascos-1.png' style={{ marginRight: '-70px', width: '70%'}} />
                                <p style={{background: '#0C131E !important', color: 'white', textAlign: 'center', width: '100%'}}>
                                    Technology consulting
                                </p>
                            </div>
                            
                            <div style={{display: 'inline-block', width: '50%'}}>
                                <img id='img-hackaton-esports' src='/img/hackaton-esports.png' style={{ marginLeft: '-70px', width: '70%'}} />
                                <p style={{background: '#0C131E !important', color: 'white', textAlign: 'center', width: '100%'}}>
                                    Events
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
                        <p style={{ color: 'white', fontSize: '15px', marginTop: '45px', textAlign: 'center', padding: '0', width: '100%' }}>
                            2023 Barqia - All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default WhatWeDo;