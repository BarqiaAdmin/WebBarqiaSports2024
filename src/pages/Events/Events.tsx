import React from 'react';

import './Events.css';

import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const Events = () => {
    return(
        <div>
            <Container fluid className='container-desktop' id='container-events'>
                <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
                <div id='nav-bar' style={{ padding: '20px 30px'}}>
                    <div style={{ display: 'inline-block' }}>
                        <img src='/img/barqia-symbol.png' />
                    </div>
                    <div style={{ float: 'right' }}>
                        <a href='/' className='nav-bar-selected-link' >home</a>
                        <a href='AboutUs'>about us</a>
                        <a href='WhatWeDo'>what we do</a>
                        <a href='/Events'>events</a>
                        <a href='Contact'>contact</a>
                    </div>
                </div>

                <Col>
                    <Row>
                        <Col>
                            <img src='/img/render-events.jpg' style={{ marginTop: '-115px', width: '100%' }} />
                        </Col>
                    </Row>
                </Col>
                <a href='/Hackathon2024'>
                <Col>
                    <Row>
                        <Col>
                            <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '-5px', textAlign: 'center' }}  >
                                EVENTS
                            </h1>
                        </Col>
                    </Row>
                        
        
                    <Row>
                        <Col className='col-6'>
                            <img src='/img/hackaton-esports.png' />
                        </Col>

                        <Col className='col-6'>
                            <h1>
                                Primer evento internacional de eSports transmitido en vivo en donde participarán programadores y desarrolladores gamming con el objetivo de crear un juego VR dentro de la plataforma inmersiva de Barqia Sports.
                            </h1>
                        </Col>

                        <Col className='col-12'>
                            <img src='/img/poligonos_3.png' style={{ width: '100%' }} />
                        </Col>
                        
                    </Row>

                </Col>

                    </a>
                <Col>
                    <Row>
                        <Col className='col-12'>
                            <h1>
                                Desde Barqia estamos elaborando una serie de eventos en distintas ciudades para encontrar nuevos talentos y su potencial para juegos de esports.
                            </h1>
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col className='col-12'>
                            <a href='/Contact'>
                                Contact us
                            </a>
                        </Col>
                    </Row>
                </Col>
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
                                2024 Barqia - All Rights Reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/** */}

            <Container className='container-mobile' id='home-container-mobile'>
                {['xxl'].map((expand) => (
                    <Navbar id='general-navbar' key={expand} expand={expand} className="bg-body-tertiary mb-3">
                        <Container fluid>
                            <img id='navbar-barqia-symbol' src='img/barqia-symbol.png' />
                            <Navbar.Toggle className='navBar-toggle' aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                            <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            
                            >
                                <Offcanvas.Header closeButton>
                                    <img src='img/barqia-symbol.png' style={{ display: 'block' }} />
                                    <img src='img/barqia-title.png' style={{ display: 'block' }} />
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3" style={{textAlign: 'center'}}>
                                        <Nav.Link style={{
                                        color: 'white'}} href="/">HOME</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white'}} href="/AboutUs">ABOUT US</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white'}} href="/WhatWeDo">WHAT WE DO</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white', textDecoration: 'underline' }} href="/Events">EVENTS</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white' }} href="/Contact">CONTACT</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                                <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', paddingBottom: '20px', position: 'relative', zIndex: '2' }}>
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
                                                2024 Barqia - All Rights Reserved.
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
                
                <Col>
                    <Row>
                        <Col>
                            <a href='/Hackathon2024'>
                                <img src='/img/render-events.jpg' style={{ width: '100%' }} />
                            </a>
                        </Col>
                    </Row>
                </Col>
                
                <Col>
                    <Row>
                        <Col>
                            <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '-5px', textAlign: 'center' }}  >
                                EVENTS
                            </h1>
                        </Col>
                    </Row>

                    <Row>
                        <a href='/Hackathon2024'>
                            <img src='/img/hackaton-esports.png' />

                            <p>
                                Primer evento internacional de eSports transmitido en vivo en donde participarán programadores y desarrolladores gamming con el objetivo de crear un juego VR dentro de la plataforma inmersiva de Barqia Sports.
                            </p>

                            <img src='/img/poligonos_3.png' style={{ width: '100%' }} />
                        </a>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <p>
                            Desde Barqia estamos elaborando una serie de eventos en distintas ciudades para encontrar nuevos talentos y su potencial para juegos de esports.
                        </p>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <a href=''>
                            Contact us
                        </a>
                    </Row>
                </Col>

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
                                2024 Barqia - All Rights Reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Events;