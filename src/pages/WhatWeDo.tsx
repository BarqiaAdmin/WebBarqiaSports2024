import React from 'react';

import './WhatWeDo.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const WhatWeDo = () => {
    return(
        <div>
            <Container fluid className='container-desktop' id='container-what-we-do'>
                <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
                <div id='nav-bar' style={{ padding: '20px 30px'}}>
                    <div style={{ display: 'inline-block' }}>
                        <img src='/img/barqia-symbol.png' />
                    </div>
                    <div style={{ float: 'right' }}>
                        <a href='/'>home</a>
                        <a href='AboutUs'>about us</a>
                        <a href='WhatWeDo' className='nav-bar-selected-link'>what we do</a>
                        <a href='/Events'>events</a>
                        <a href='Contact'>contact</a>
                    </div>
                </div>
                
                <div>
                    <img id='img-home-2' src='/img/what-we-do/what-we-do.jpg' style={{ width: '100%', marginTop: '-300px' }} />
                </div>

                <Container style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
                    <Row>
                        <Col>
                            <h1 id='h1-welcome-to-barqia' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '0', textAlign: 'center' }} >
                                WHAT WE DO
                            </h1>
                            <img src='/img/panel_4_i.png' style={{ position: 'absolute', transform: 'rotate(180deg)', width: '337px'}} />
                            <img src='/img/panel_3_i.png' style={{ position: 'absolute', transform: 'rotate(180deg)', right: '0', marginTop: '450px', width: '515px'}} /> 
                            <Row>
                                <Col className='col-lg-6'>
                                    <video autoPlay muted loop playsInline style={{ borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '8px', borderStyle: 'solid', float: 'right', marginTop: '60px', position: 'relative', zIndex: '1', width: '70%' }}>
                                        <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
                                    </video>
                                </Col>
                                <Col className='col-lg-6' style={{ marginTop: '5px' }}>
                                    <p style={{ color: 'white', lineHeight: '48px', marginTop: '18px' }}>
                                        We are the leading IMMERSIVE FAN ENGAMENT PLATFORM perfect for clubs, athletes and fans of all sports worldwide. Participate in all the immersive experiences, earn points, get benefits and help to grow your favorite club or athlete.
                                        <br /><br />
                                        Thanks to our cutting-edge technology, this allows us to capture the maximum attention of the fans and create a closer bond between them and their favourite clubs or athletes.
                                    </p>
                                </Col>
                                <Col className='col-lg-12'>
                                    <h1 className='titulo-neon' style={{ textAlign: 'center', fontSize: '70px', margin: '150px 0'}}>
                                        OUR SERVICES
                                    </h1>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ position: 'relative', textAlign: 'center' }}>
                        {/**
                        <Col xs={6}>
                            <div className='banda-vertical' style={{ marginLeft: '200px', marginTop: '-323px', height: '2500px', width: '263px', zIndex: '1' }}></div>
                        </Col>
                        
                        <Col xs={6}>
                            <div className='banda-vertical' style={{ marginLeft: '200px', marginTop: '-323px', height: '2500px', width: '263px', zIndex: '1' }}></div>
                        </Col>
                         */}    
                        <img src='/img/panel_4_i.png' style={{ position: 'absolute', right: '0', top: '-265px', width: '337px' }} />
                        <img src='/img/panel_4_i.png' style={{ position: 'absolute', left: '1', top: '1010px', width: '337px', transform: 'rotate(180deg)' }} />
                        <img src='/img/panel_5_i.png' style={{ position: 'absolute', left: '-226px', top: '450px', width: '690px', transform: 'rotate(90deg)'}} />
                        <img src='/img/panel_5_i.png' style={{ position: 'absolute', right: '-227px', top: '1000px', width: '690px', transform: 'rotate(270deg)'}} />
                        <img src='/img/panel_3_i.png' style={{ position: 'absolute', right: '-154px', top: '1533px', width: '690px', transform: 'rotate(270deg)'}} />
                        <Col xs={6}>
                            
                            <img src='/img/what-we-do/clubes-deportivos+plataforma-inmersiva.png' style={{ float: 'right', position: 'relative', zIndex: '2' }}/>
                            <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '28px', marginTop: '161px', marginLeft: '190px', padding: '10px 15px', position: 'absolute', left: '496px', zIndex: '2' }}>
                                IMMERSIVE PLATFORM
                            </div>
                        </Col>
                        
                        <Col xs={6}>
                        </Col>

                        <Col xs={6}>
                        </Col>

                        <Col xs={6}>
                            <img src='/img/what-we-do/eventos-hackathons-gaming.png' style={{ float: 'left', position: 'relative', zIndex: '2' }}/>
                            <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '28px', marginTop: '150px', marginLeft: '-168px', padding: '10px 15px', position: 'absolute', left: '395px', zIndex: '2' }}>
                                HACKATHONS GAMING EVENTS
                            </div>
                        </Col>

                        <Col xs={6}>
                            <img src='/img/what-we-do/disfrutar-de-experiencias.png' style={{ float: 'right', position: 'relative', zIndex: '2' }}/>
                            <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '28px', marginTop: '155px', marginLeft: '190px', padding: '10px 15px', position: 'absolute', left: '497px', zIndex: '2' }}>
                                IMMERSIVE EXPERIENCIES
                            </div>
                        </Col>

                        <Col xs={6}>
                        </Col>

                        <Col xs={6}>
                        </Col>

                        <Col xs={6}>
                            <img src='/img/what-we-do/sistema-de-niveles-+-skins.png' style={{  float: 'left', position: 'relative', zIndex: '2' }}/>
                            <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '28px', marginTop: '160px', marginLeft: '-170px', padding: '10px 15px', position: 'absolute', left: '432px', zIndex: '2' }}>
                                LEVELING SYSTEM + SKINS
                            </div>
                        </Col>

                        <Col xs={6}>
                            <img src='/img/what-we-do/beneficio-a-usuarios.png' style={{ float: 'right', position: 'relative', zIndex: '2' }}/>
                            <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '28px', marginTop: '165px', marginLeft: '495px', padding: '10px 15px', position: 'absolute', left: '200px', zIndex: '2' }}>
                                USER BENEFITS
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

            <Container className='container-mobile' id='home-container-mobile' fluid>
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
                                    <img src='img/barqia-symbol.png' style={{ display: 'block', width: '70px' }} />
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
                                        <Nav.Link className='nav-bar-selected-link' href="/WhatWeDo">WHAT WE DO</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white' }} href="/Events">EVENTS</Nav.Link>
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
                
                <div>
                    <img id='img-home-2' src='/img/what-we-do/what-we-do.jpg' style={{ width: '100%' }} />
                </div>

                <div id='segundo-container' style={{display: 'inline-block' }}>
                    <h1 id='h1-welcome-to-barqia' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '0', marginTop: '-6px', textAlign: 'center' }} >
                        WHAT WE DO
                    </h1>

                    <p style={{ color: 'white', lineHeight: '48px' }}>
                        We are the leading IMMERSIVE FAN ENGAMENT PLATFORM perfect for clubs, athletes and fans of all sports worldwide. Participate in all the immersive experiences, earn points, get benefits and help to grow your favorite club or athlete.
                        Thanks to our cutting-edge technology, this allows us to capture the maximum attention of the fans and create a closer bond between them and their favourite clubs or athletes.
                    </p>
                </div>

                <Row style={{ marginBottom: '80px', position: 'relative', zIndex: '1' }}>
                    <Col xs={12} style={{ marginTop: '-40px', zIndex: '2' }}>
                        <img src='/img/poligonos_3.png' />
                    </Col>

                    <Col xs={6}>
                        <div className='banda-vertical'></div>
                    </Col>
                    
                    <Col xs={6}>
                        <div className='banda-vertical'></div>
                    </Col>

                    <Col className='col-lg-12' style={{ marginBottom: '40px' }}>
                        <h1 className='titulo-neon' style={{ textAlign: 'center', fontSize: '70px' }}>
                            OUR SERVICES
                        </h1>
                    </Col>  

                    <Col xs={6}>
                        <img src='/img/what-we-do/clubes-deportivos+plataforma-inmersiva.png' />
                        <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '18px', marginTop: '-120px', marginLeft: '137px', padding: '10px 15px', textAlign: 'center', left: '496px', width: '240px' }}>
                            CLUBES DEPORTIVOS + PLATAFORMA INMERSIVA
                        </div>
                    </Col>
                    
                    <Col xs={6}>
                    </Col>

                    <Col xs={6}>
                    </Col>

                    <Col xs={6}>
                        <img src='/img/what-we-do/eventos-hackathons-gaming.png' />
                        <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '18px', marginTop: '-120px', marginLeft: '-200px', padding: '10px 15px', textAlign: 'center', left: '496px', width: '240px' }}>
                            EVENTOS HACKATHONS GAMING
                        </div>
                    </Col>

                    <Col xs={6}>
                        <img src='/img/what-we-do/disfrutar-de-experiencias.png' />
                        <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '18px', marginTop: '-120px', marginLeft: '137px', padding: '10px 15px', textAlign: 'center', left: '496px', width: '240px' }}>
                            DISFRUTAR DE EXPERIENCIAS
                        </div>
                    </Col>

                    <Col xs={6}>
                    </Col>

                    <Col xs={6}>
                    </Col>

                    <Col xs={6}>
                        <img src='/img/what-we-do/sistema-de-niveles-+-skins.png' />
                        <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '18px', marginTop: '-120px', marginLeft: '-200px', padding: '10px 15px', textAlign: 'center', left: '496px', width: '240px' }}>
                            SISTEMAS DE NIVELES + SKINS
                        </div>
                    </Col>

                    <Col xs={6}>
                        <img src='/img/what-we-do/beneficio-a-usuarios.png' />
                        <div style={{ background: 'black', borderRadius: '5px', borderImage: 'linear-gradient(#00415C, #681253) 30', borderWidth: '4px', borderStyle: 'solid', color: 'white', fontSize: '18px', marginTop: '-120px', marginLeft: '137px', padding: '10px 15px', textAlign: 'center', left: '496px', width: '240px' }}>
                            BENEFICIO A USUARIOS
                        </div>
                    </Col>
                </Row>

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

export default WhatWeDo;