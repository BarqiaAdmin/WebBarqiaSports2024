import React from 'react';

import './AboutUs.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
    return(
        <div>
            <Container fluid className='container-desktop' id='container-about-us'>
                <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '2' }} />
                <div id='nav-bar' style={{ padding: '20px 30px', zIndex: '2'}}>
                    <div style={{ display: 'inline-block' }}>
                        <img src='/img/barqia-symbol.png' />
                    </div>
                    <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                        <a href='/'>home</a>
                        <a href='/AboutUs' className='nav-bar-selected-link' >about us</a>
                        <a href='/WhatWeDo'>what we do</a>
                        <a href='/Events'>events</a>
                        <a href='/Contact'>contact</a>
                    </div>
                </div>

                <Carousel data-bs-theme="dark" style={{ marginTop: '-4%', zIndex: '1' }}>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="/img/barqia-estadio.PNG"
                        alt="First slide"
                        />
                        {/* 
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="/img/barqia-stadium-entrada.PNG"
                        alt="Second slide"
                        />
                        {/*
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="/img/estadio.PNG"
                        alt="Third slide"
                        />
                        {/*
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                        */}
                    </Carousel.Item>
                </Carousel>

                <Container style={{ padding: '0' }}>
                    <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', position: 'relative', marginTop: '-6px', textAlign: 'center', zIndex: '1' }}  >
                        OUR MISSION
                    </h1>

                    <div style={{ position: 'relative' }}>
                        <p style={{ color: 'white', display: 'inline-block', fontSize: '19px', width: '60%' }}>
                            Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world.
                        </p>

                        <img id='panel_3_i' src='/img/panel_4_i.png' style={{marginTop: '-530px', maxWidth: '25%', position: 'absolute', right: '0', rotate: '360deg', zIndex: '0' }} />
                    </div>

                    <div className='flex-container' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                        <img src='/img/panel_3_i.png' style={{ maxWidth: '40%'}} />
                        <p style={{ color: 'white', display: 'inline-block', fontSize: '19px', width: '60%'  }}>
                            We strive to foster an environment that allows fans to have unique and enriching experiences, while providing sports, clubs and athletes with the tools and technology necessary to strengthen their bond with their audience and take their engagement to the next level. Ultimately, our mission is to drive the evolution of relationships in the world of sport, bringing about a deeper and more authentic approach between all those involved.
                        </p>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img className='hide-on-desktop' src='/img/laser-2.png' style={{width: '100%'}} />
                        <img className='hide-on-desktop' src='/img/poligonos.png' style={{width: '100%'}} />
                        <img className='poligonos' src='/img/poligonos.png' style={{width: '100%'}} />
                        <img className='poligonos' src='/img/panel_3_n_i.png' style={{transform: 'rotate(180deg)', width: '100%'}} />
                        <img className='poligonos' src='/img/panel_4_i.png' style={{width: '100%'}} />

                        <div id='story-mobile'>
                            <div id='about-us-content'>
                                <div id='div-img-story-title'>
                                    <img src='/img/story-title.png' />
                                    <div style={{ textAlign: 'center'}}>
                                        <video autoPlay muted loop playsInline style={{width: '100%'}}>
                                            <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <p style={{ color: 'white' }}>
                                    Barqia Sports was born as a result of the merger of an Argentine company, known as Barqia, and a Spanish one, Padel Fantasy. Our contact occurred thanks to participation in a reference event for startups and entrepreneurs at an international level. After several months of conversations, reflections and exchange of passions, we had the extraordinary idea of founding Barqia Sports, a comprehensive fan engagement platform.
                                </p>
                                <p style={{ color: 'white', marginLeft: '35%' }}>
                                    We share the same common interests and aspirations, focused on the application of cutting-edge and futuristic technology for the benefit of clubs, athletes and fans, with the purpose of creating a fully immersive platform with absolute connectivity between all the parties involved.
                                </p>
                            </div>
                        </div>

                        <div id='story-desktop' className='hide-on-mobile' style={{position: 'relative'}}>
                            <img src='/img/laser-2.png' style={{width: '100%'}} />
                            <img src='/img/poligonos.png' style={{width: '100%'}} />
                            <div id='div-img-story-title' style={{position: 'absolute', top: '10%', left: '5%'}}>
                                <img src='/img/story-title.png' />
                                <div style={{ textAlign: 'center'}}>
                                    <video autoPlay muted loop playsInline style={{width: '100%'}}>
                                        <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div id='about-us-content' style={{position: 'absolute', top: '10%', right: '10%', width: '50%'}}>
                                <p style={{ color: 'white', marginTop: '5px', width: '100%'}}>
                                    Barqia Sports was born as a result of the merger of an Argentine company, known as Barqia, and a Spanish one, Padel Fantasy. Our contact occurred thanks to participation in a reference event for startups and entrepreneurs at an international level. After several months of conversations, reflections and exchange of passions, we had the extraordinary idea of founding Barqia Sports, a comprehensive fan engagement platform.
                                </p>
                                <p style={{ color: 'white', marginTop: '65px', width: '100%' }}>
                                    We share the same common interests and aspirations, focused on the application of cutting-edge and futuristic technology for the benefit of clubs, athletes and fans, with the purpose of creating a fully immersive platform with absolute connectivity between all the parties involved.
                                </p>
                            </div>
                            <Container style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '15px 40px', position: 'absolute', top: '50%' }}>
                                <Row>
                                    <Col style={{ display: 'inline-block', width: '33%' }}>
                                        <div style={{ textAlign: 'center', position: 'relative' }}>
                                            <div>
                                                <img style={{ borderRadius: '100%', width: '70%'}} src='/img/barqia-felipe-barquin.png' />
                                            </div>
                                            <h1>
                                                Felipe Barquin
                                            </h1>
                                            <h2>
                                                CEO
                                            </h2>
                                            <h4>
                                                Founder of Barqia
                                            </h4>
                                            <div style={{ fontStyle: 'italic' }}>
                                                A technology company focused on development with AI.
                                            </div>
                                            <div>
                                                <br /><br />
                                                <a href='https://www.linkedin.com/in/felipebarquin/' target='_blank'>
                                                    <img src='/img/view-my-linkedin-profile.png' style={{ width: '170px' }}/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col style={{ display: 'inline-block', margin: '0 15px', width: '33%' }}>
                                        <div style={{ textAlign: 'center', position: 'relative' }}>
                                            <div>
                                                <img style={{ borderRadius: '100%', width: '70%'}} src='/img/barqia-fernando-carmona.png' />
                                            </div>
                                            <h1>
                                                Fernando Carmona
                                            </h1>
                                            <h2>
                                                COO
                                            </h2>
                                            <h4>
                                                Sports Business Management
                                            </h4>
                                            <div style={{ fontStyle: 'italic' }}>
                                                Co-Founder of Padel Fantasy. Fantasy game app from the world of sports.
                                            </div>
                                            <div>
                                                <br /><br />
                                                <a href='https://www.linkedin.com/in/fernandocarmonaarmengou/' target='_blank'>
                                                    <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col style={{ display: 'inline-block', width: '33%' }}>
                                        <div style={{ textAlign: 'center', position: 'relative' }}>
                                            <div>
                                                <img style={{ borderRadius: '100%', width: '70%'}} src='/img/barqia-diego-gomez.png' />
                                            </div>
                                            <h1>
                                                Diego Gomez
                                            </h1>
                                            <h2>
                                                CTO
                                            </h2>
                                            <h4>
                                                Project Manager
                                            </h4>
                                            <div style={{ fontStyle: 'italic' }}>
                                                Interactive Spaces Specialist in VR/AR
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <br /><br />
                                                <a href='https://www.linkedin.com/in/diego-g%C3%B3mez-martil-8a0603268/' target='_blank'>
                                                    <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
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

            <Container className='container-mobile' id='home-container-mobile' style={{ overflow: 'hidden' }}>
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
                                    {/*<img src='img/barqia-title.png' style={{ display: 'block', width: '145px' }} */}
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3" style={{textAlign: 'center'}}>
                                        <Nav.Link style={{
                                        color: 'white'}} href="/">HOME</Nav.Link>
                                        <Nav.Link className='nav-bar-selected-link' href="/AboutUs">ABOUT US</Nav.Link>
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
                <Carousel data-bs-theme="dark" style={{ zIndex: '1' }}>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="/img/barqia-estadio.PNG"
                        alt="First slide"
                        />
                        {/* 
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="/img/barqia-stadium-entrada.PNG"
                        alt="Second slide"
                        />
                        {/*
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="/img/estadio.PNG"
                        alt="Third slide"
                        />
                        {/*
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                        */}
                    </Carousel.Item>
                </Carousel>
                <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', marginTop: '40px', position: 'relative', textAlign: 'center', zIndex: 1 }}  >
                    OUR MISSION
                </h1>

                <div style={{ position: 'relative' }}>
                    <img src='/img/panel_5_i.png' style={{ position: 'absolute', top: '102px', left: '-66px', transform: 'rotate(-270deg)', width: '193px', zIndex: '0' }} />
                    <img src='/img/panel_4_i.png' style={{ position: 'absolute', top: '-163px', right: '-7px', width: '90px' }} />
                    <img src='/img/panel_3_i.png' style={{ position: 'absolute', top: '608px', left: '-46px', width: '157px' }} />
                    <img src='/img/panel_4_i.png' style={{ position: 'absolute', top: '560px', right: '-15px', width: '90px' }} />
                    <p id='first-p-our-mission' style={{ color: 'white', display: 'inline-block', fontSize: '19px', position: 'relative' }}>
                        Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world.
                    </p>
                </div>

                <div className='flex-container' style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                    <p id='first-p-our-mission-2' style={{ color: 'white', display: 'inline-block', fontSize: '19px' }}>
                        We strive to foster an environment that allows fans to have unique and enriching experiences, while providing sports, clubs and athletes with the tools and technology necessary to strengthen their bond with their audience and take their engagement to the next level. Ultimately, our mission is to drive the evolution of relationships in the world of sport, bringing about a deeper and more authentic approach between all those involved.
                    </p>
                    <img src='/img/panel_5_i.png' style={{ position: 'absolute', bottom: '85px', left: '-62px', transform: 'rotate(90deg)', width: '180px' }} />
                    <img src='/img/panel_4_i.png' style={{ position: 'absolute', bottom: '120px', right: '-35px', width: '90px' }} />
                </div>

                <video autoPlay muted loop style={{position: 'relative', width: '100%', zIndex: '1' }}>
                    <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
                </video>
                <p id='third-p-our-mission' style={{ color: 'white', position: 'relative' }}>
                    <img src='/img/panel_5_i.png' style={{ position: 'absolute', top: '85px', left: '-66px', transform: 'rotate(-270deg)', width: '193px', zIndex: '0' }} />
                    <img src='/img/panel_4_i.png' style={{ position: 'absolute', top: '-163px', right: '-7px', width: '90px' }} />
                    <img src='/img/panel_3_i.png' style={{ position: 'absolute', top: '680px', left: '-46px', width: '157px' }} />
                    <img src='/img/panel_4_i.png' style={{ position: 'absolute', top: '660px', right: '-15px', width: '90px' }} />
                    Barqia Sports was born as a result of the merger of an Argentine company, known as Barqia, and a Spanish one, Padel Fantasy. Our contact occurred thanks to participation in a reference event for startups and entrepreneurs at an international level. After several months of conversations, reflections and exchange of passions, we had the extraordinary idea of founding Barqia Sports, a comprehensive fan engagement platform.
                </p>
                <p id='fourth-p-our-mission' style={{ color: 'white', position: 'relative' }}>
                    <img src='/img/panel_5_i.png' style={{ position: 'absolute', bottom: '-23px', left: '-62px', transform: 'rotate(90deg)', width: '180px' }} />
                    <img src='/img/panel_4_i.png' style={{ position: 'absolute', bottom: '-20px', right: '-35px', width: '90px' }} />
                    We share the same common interests and aspirations, focused on the application of cutting-edge and futuristic technology for the benefit of clubs, athletes and fans, with the purpose of creating a fully immersive platform with absolute connectivity between all the parties involved.
                </p>

                <Container style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '15px 40px' }}>
                    <Row>
                        <Col style={{ display: 'inline-block' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div>
                                    <img style={{ borderRadius: '100%', width: '85%',  marginBottom: '25px'}} src='/img/barqia-felipe-barquin.png' />
                                </div>
                                <h1>
                                    Felipe Barquin
                                </h1>
                                <h2>
                                    CEO
                                </h2>
                                <h3>
                                    Founder of Barqia
                                </h3>
                                <div style={{ fontStyle: 'italic' }}>
                                    A technology company focused on development with AI.
                                </div>
                                <div style={{ marginTop: '20px', marginBottom: '60px'}}>
                                    <a href='https://www.linkedin.com/in/felipebarquin/' target='_blank'>
                                        <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col style={{ display: 'inline-block', margin: '0 15px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div>
                                    <img style={{ borderRadius: '100%', width: '85%',  marginBottom: '25px'}} src='/img/barqia-fernando-carmona.png' />
                                </div>
                                <h1>
                                    Fernando Carmona
                                </h1>
                                <h2>
                                    COO
                                </h2>
                                <h3>
                                    Sports Business Management
                                </h3>
                                <div style={{ fontStyle: 'italic' }}>
                                    Co-Founder of Padel Fantasy. Fantasy game app from the world of sports.
                                </div>
                                <div style={{ marginTop: '20px', marginBottom: '60px'}}>
                                    <a href='https://www.linkedin.com/in/fernandocarmonaarmengou/' target='_blank'>
                                        <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col style={{ display: 'inline-block' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div>
                                    <img style={{ borderRadius: '100%', width: '85%',  marginBottom: '25px'}} src='/img/barqia-diego-gomez.png' />
                                </div>
                                <h1>
                                    Diego Gomez
                                </h1>
                                <h2>
                                    CTO
                                </h2>
                                <h3>
                                    Project Manager
                                </h3>
                                <div style={{ fontStyle: 'italic' }}>
                                    Interactive Spaces Specialist in VR/AR
                                </div>
                                <div style={{ marginTop: '20px', marginBottom: '60px'}}>
                                    <a href='https://www.linkedin.com/in/diego-g%C3%B3mez-martil-8a0603268/' target='_blank'>
                                        <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
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
}

export default AboutUs;