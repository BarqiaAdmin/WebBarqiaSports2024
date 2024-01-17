import React from 'react';

import './Home.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const Home = () => (
    <div>
        <Container fluid className='container-desktop' id='home-container'>
            <img id='navbar-laser' src='/img/navbar_laser.png' />
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
            <video autoPlay muted loop style={{ marginTop: '-138px', width: '100%' }} >
                <source src="video/Video_BarqIA_Promo.mp4" type="video/mp4" />
            </video>
            <h1 id='h1-welcome-to-barqia' className='neonText' style={{ background: '#171618', color: 'white', marginTop: '0', marginBottom: '0', textAlign: 'center' }} >
                WELCOME TO BARQIA
            </h1>
            <Container id='home-body'>
                <Row>
                    <Col className='col-lg-12' style={{ padding: '0'}}>
                        <img src='/img/poligonos.png' style={{ width: '100%'}}/>
                    </Col>
                    <Col className='col-lg-12'>
                        <div id='barqia-symbol-gif-container' style={{ textAlign: 'center', marginTop: '-168%', position: 'relative', zIndex: '2' }}>
                            <img id='barqia-footer-gif' src='/img/barqia-symbol-gif.gif' style={{ width: '100%', marginTop: '-340px'}} />
                        </div>
                    </Col>
                    <Col className='col-lg-8' style={{marginTop: '-144%'}}>
                        <p>
                            Feel the passion for sports in a more immersive way. Interact with your sports entity and move up levels where you can grow your club and your passion. Live the emotion with Baqia Sports.
                        </p>
                        <p>
                            We are passionate about sports and technology. Barqia Sports wants to deliver you a moreinteractive and technological way to continue living sports to spread the same passion to you.
                        </p>
                    </Col>

                    <Col className='col-lg-6' style={{ marginTop: '-118%', textAlign: 'center' }}>
                         <img src='/img/home-1.PNG' />
                    </Col>

                    <Col className='col-lg-5' style={{ marginTop: '-97%' }}>
                        <p style={{ marginLeft: '-5%'}}>
                            The immersive platform that offers fans the opportunity to create a closer bond with athletes and sports entities.
                        </p>

                        <p style={{ marginLeft: '-5%'}}>
                            Offer innovative and technological services to your fans and they will return it to you.
                        </p>
                    </Col>

                    <Col className='col-lg-6'>
                        <p style={{ marginLeft: '25%', marginTop: '-90%', width: '90%' }}>
                            We design tailor-made solutions to enhance the success of your company. We tailor our expertise to your specific requirements, delivering the product you really need and deserve.
                        </p>
                    </Col>  

                    <Col className='col-lg-6' style={{ height: '1000px' }}>
                        <img src='/img/home-3.PNG' style={{ height: '55%', marginLeft: '20%', marginTop: '-145%', width: '90%'}} />
                    </Col>

                    <Col className='col-lg-8'>
                        <img src='/img/home-2.PNG' style={{ marginTop: '-202%' }} />
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
                        <img id='navbar-barqia-symbol' src='img/barqia-symbol.png' width='70px' />
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
                                       color: 'white', textDecoration: 'underline' }} href="/">HOME</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/AboutUs">ABOUT US</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/WhatWeDo">WHAT WE DO</Nav.Link>
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
            <video autoPlay muted loop style={{ width: '100%' }} >
                <source src="video/Video_BarqIA_Promo.mp4" type="video/mp4" />
            </video>
            <h1 id='h1-welcome-to-barqia' className='neonText' style={{ background: '#171618', color: 'white', marginTop: '-7px', textAlign: 'center' }} >
                WELCOME TO BARQIA
            </h1>
            <Container>
                <div id='first-p-welcome-to-barqia'>
                    <p style={{ position: 'relative' }}>
                        <img src='/img/panel_2_i.png' style={{ position: 'absolute', right: '-24px', top: '-8px', width: '90px' }} />
                        <img src='/img/panel_5_i.png' style={{ position: 'absolute', left: '-78px', top: '470px', transform: 'rotate(90deg)', width: '193px' }} />
                        <img src='/img/panel_4_i.png' style={{ position: 'absolute', right: '-24px', top: '500px',  width: '90px' }} />
                        Feel the passion for sports in a more immersive way. Interact with your sports entity and move up levels where you can grow your club and your passion. Live the emotion with Barqia Sports. <br />
                        We are passionate about sports and technology. Barqia Sports wants to deliver you a more interactive and technological way to continue living sports to spread the same passion to you.
                    </p>
                    <img src='/img/home-1.PNG' />
                </div>
                <div id='second-p-welcome-to-barqia'>
                    <p style={{ position: 'relative' }}>
                        <img src='/img/panel_1_i.png' style={{ position: 'absolute', right: '-24px', left: '-12px', top: '-2px', width: '90px' }} />
                        The immersive platform that offers fans the opportunity to create a closer bond with athletes and sports entities. Offer innovative and technological services to your fans and they will return it to you.
                    </p>
                    <img src='/img/home-2.PNG' />
                </div>
                <div id='third-p-welcome-to-barqia'>
                    <p style={{ position: 'relative' }}>
                        <img src='/img/panel_2_i.png' style={{ position: 'absolute', top: '0', right: '-30px', width: '90px' }} />
                        We design tailor-made solutions to enhance the success of your company. We tailor our expertise to your specific requirements, delivering the product you really need and deserve.
                    </p>
                    <img src='/img/home-3.PNG' />
                </div>
            </Container>

            <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2' }}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <img src='/img/Logo_Inicio.png' style={{ width: '80px' }} />
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

export default Home;