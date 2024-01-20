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
                        <a href='/'>home</a>
                        <a href='AboutUs'>about us</a>
                        <a href='WhatWeDo'>what we do</a>
                        <a href='/Events' className='nav-bar-selected-link'>events</a>
                        <a href='Contact'>contact</a>
                    </div>
                </div>

                <Row>
                    <Col>
                        <img src='/img/render-events.jpg' style={{ marginTop: '-47px', width: '100%' }} />
                    </Col>
                    <Col className='col-lg-12'>
                        <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', margin: '30px 0', textAlign: 'center' }}  >
                            EVENTS
                        </h1>
                    </Col>

                    <Col className='col-lg-6'>
                        <img src='/img/hackathon-2024-flyer.png' style={{ width: '100%' }} />
                    </Col>
                    <Col className='col-lg-6' style={{ textAlign: 'center', padding: '0 50px' }}>
                        <h1 style={{ lineHeight: '85px' }}>
                            Primer evento internacional de eSports transmitido en vivo en donde participarán programadores y desarrolladores gamming con el objetivo de crear un juego VR dentro de la plataforma inmersiva de Barqia Sports.
                        </h1><br />
                        <a href='/Hackathon2024'>
                            <Button style={{ background: '#16525F', fontSize: '20px', padding: '20px', color: 'white', }}>
                                Sitio del evento
                            </Button>
                        </a>
                    </Col>

                    <Col className='col-12'>
                        <img src='/img/poligonos_3.png' style={{ width: '100%', marginTop: '-150px' }} />
                    </Col>
                    <Col>
                        <h1 style={{ margin: 'auto', lineHeight: '85px', textAlign: 'center', width: '50%'}}>
                            Desde Barqia estamos elaborando una serie de eventos en distintas ciudades para encontrar nuevos talentos y su potencial para juegos de esports.
                        </h1><br />
                        <p style={{ textAlign: 'center'}}>
                            <a href='/Contact'>
                                <Button style={{ background: '#16525F', fontSize: '20px', padding: '20px', color: 'white', }}>
                                    Contacto
                                </Button>
                            </a>
                        </p><br />
                    </Col>
                </Row>
                <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2' }}>
                    <Row>
                        <Col style={{ textAlign: 'center' }}>
                            <div id='barqia-symbol-gif-container' style={{ textAlign: 'center', position: 'relative', zIndex: '1' }}>
                                <img id='barqia-footer-gif' src='/img/barqia-symbol-gif.gif' />
                            </div>
                        </Col>
                    </Row>
                    <hr style={{ color: '#404040', margin: '40px 0' }} />
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
                                    <img src='img/barqia-symbol.png' style={{ display: 'block', width: '70px' }}  />
                                    {/*<img src='img/barqia-title.png' style={{ display: 'block', width: '145px' }} />*/}
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
                                        <Nav.Link className='nav-bar-selected-link' href="/Events">EVENTS</Nav.Link>
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
                                    <hr style={{ color: '#404040', margin: '40px 0' }} />
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
                            <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', margin: '40px 0', textAlign: 'center' }}  >
                                EVENTS
                            </h1>
                        </Col>
                    </Row>

                    <Row>
                        <p style={{ textAlign: 'center'}}>
                            Primer evento internacional de eSports transmitido en vivo en donde participarán programadores y desarrolladores gamming con el objetivo de crear un juego VR dentro de la plataforma inmersiva de Barqia Sports.
                        </p>


                        <img src='/img/poligonos_3.png' style={{ marginTop: '-35px', width: '100%', zIndex: '1' }} />

                        <p style={{ padding: '-0px',  }}>
                            <img src='/img/hackathon-2024-flyer.png' style={{ marginTop:'-40px', position: 'relative',    width: '100%', zIndex: '0' }} />
                        </p>
                        <p style={{ textAlign: 'center'}}>
                            <a href='/Hackathon2024'>
                                <Button style={{ background: '#16525F', fontSize: '20px', padding: '20px', color: 'white', }}>
                                    Sitio del evento
                                </Button>
                            </a>
                        </p>
                    </Row>
                </Col>

                <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2' }}>
                    <Row>
                        <Col style={{ textAlign: 'center' }}>
                            <img src='/img/Logo_Inicio.png' style={{ width: '80px' }} />
                        </Col>
                    </Row>
                    <hr style={{ color: '#404040', margin: '40px 0' }} />
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