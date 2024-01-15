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
            <Container fluid className='container-desktop' id='container-about-us' style={{ background: '' }}>
                <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
                <div id='nav-bar' style={{ padding: '20px 30px'}}>
                    <div style={{ display: 'inline-block' }}>
                        <img src='/img/barqia-symbol.png' />
                    </div>
                    <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                        <a href='/'>home</a>
                        <a href='AboutUs' className='nav-bar-selected-link' >about us</a>
                        <a href='WhatWeDo'>what we do</a>
                        <a href='/Events'>events</a>
                        <a href='Contact'>contact</a>
                    </div>
                </div>

                <Carousel data-bs-theme="dark">
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

                <Container>
                    
                    <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '-5px', textAlign: 'center' }}  >
                        OUR MISSION
                    </h1>

                    <div>
                        <p style={{ color: 'white', display: 'inline-block', fontSize: '19px', width: '59%' }}>
                            Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world.
                        </p>

                        <img id='panel_3_i' src='/img/panel_3_i.png' style={{ marginLeft: '92px', marginTop: '-205px', maxWidth: '34%', rotate: '180deg' }} />
                    </div>

                    <div className='flex-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src='/img/panel_3_n_i.png' style={{ maxWidth: '34%'}} />
                        <p style={{ color: 'white', display: 'inline-block', fontSize: '19px', width: '59%'  }}>
                            We strive to foster an environment that allows fans to have unique and enriching experiences, while providing sports, clubs and athletes with the tools and technology necessary to strengthen their bond with their audience and take their engagement to the next level. Ultimately, our mission is to drive the evolution of relationships in the world of sport, bringing about a deeper and more authentic approach between all those involved.
                        </p>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img className='hide-on-desktop' src='/img/laser-2.png' style={{width: '100%'}} />
                        <img className='hide-on-desktop' src='/img/poligono_4.png' style={{width: '100%'}} />
                        <img className='poligonos' src='/img/panel_3_i.png' style={{width: '100%'}} />
                        <img className='poligonos' src='/img/panel_3_n_i.png' style={{transform: 'rotate(180deg)', width: '100%'}} />
                        <img className='poligonos' src='/img/panel_4_i.png' style={{width: '100%'}} />

                        <div id='story-mobile'>
                            <div id='about-us-content'>
                                <div id='div-img-story-title'>
                                    <img src='/img/story-title.png' />
                                    <div style={{ textAlign: 'center'}}>
                                        <video autoPlay muted loop style={{width: '100%'}}>
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
                            <img src='/img/poligono_4.png' style={{width: '100%'}} />
                            <div id='div-img-story-title' style={{position: 'absolute', top: '10%', left: '5%'}}>
                                <img src='/img/story-title.png' />
                                <div style={{ textAlign: 'center'}}>
                                    <video autoPlay muted loop style={{width: '100%'}}>
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
                            <Container style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '15px 40px', position: 'absolute', top: '60%' }}>
                                <Row>
                                    <Col style={{ display: 'inline-block', width: '30%' }}>
                                        <div>
                                            <div>
                                                <img style={{ borderRadius: '100%', width: '85%'}} src='/img/barqia-felipe-barquin.png' />
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
                                            <div>
                                                <br /><br />
                                                <a href='https://www.linkedin.com/in/felipebarquin/' target='_blank'>
                                                    <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col style={{ display: 'inline-block', margin: '0 15px', width: '30%' }}>
                                        <div>
                                            <div>
                                                <img style={{ borderRadius: '100%', width: '85%'}} src='/img/barqia-fernando-carmona.png' />
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
                                            <div>
                                                <br /><br />
                                                <a href='https://www.linkedin.com/in/fernandocarmonaarmengou/' target='_blank'>
                                                    <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col style={{ display: 'inline-block', width: '30%' }}>
                                        <div>
                                            <div>
                                                <img style={{ borderRadius: '100%', width: '85%'}} src='/img/barqia-diego-gomez.png' />
                                            </div>
                                            <h1>
                                                Diego Gomez
                                            </h1>
                                            <h2>
                                                CTO
                                            </h2>
                                            <h3>
                                                Degree in Information Systems
                                            </h3>
                                            <div style={{ fontStyle: 'italic' }}>
                                                Project Manager Specialist of Interactive Space in VR/AR
                                            </div>
                                            <div>
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
                                    <img src='img/barqia-symbol.png' style={{ display: 'block', width: '70px' }} />
                                    <img src='img/barqia-title.png' style={{ display: 'block', width: '145px' }} />
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3" style={{textAlign: 'center'}}>
                                        <Nav.Link style={{
                                        color: 'white'}} href="/">home</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white', textDecoration: 'underline' }} href="/AboutUs">about us</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white' }} href="/WhatWeDo">what we do</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white' }} href="/Events">events</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white' }} href="/Contact">contact</Nav.Link>
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
                <Carousel data-bs-theme="dark" style={{ marginTop: '113px' }}>
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
                <h1 id='h1-about-us-our-mission' className='neonText' style={{ background: '#171618', color: 'white', marginBottom: '-5px', textAlign: 'center' }}  >
                    OUR MISSION
                </h1>

                <div>
                    <p style={{ color: 'white', display: 'inline-block', fontSize: '19px' }}>
                        Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world.
                    </p>

                    {/**
                    <img id='panel_3_i' src='/img/panel_3_i.png' style={{ marginLeft: '92px', marginTop: '-205px', maxWidth: '34%', rotate: '180deg' }} />
                     */}
                </div>

                <div className='flex-container' style={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/**
                    <img src='/img/panel_3_n_i.png' style={{ maxWidth: '34%'}} />
                     */}
                    <p style={{ color: 'white', display: 'inline-block', fontSize: '19px' }}>
                        We strive to foster an environment that allows fans to have unique and enriching experiences, while providing sports, clubs and athletes with the tools and technology necessary to strengthen their bond with their audience and take their engagement to the next level. Ultimately, our mission is to drive the evolution of relationships in the world of sport, bringing about a deeper and more authentic approach between all those involved.
                    </p>
                </div>

                <video autoPlay muted loop style={{width: '100%'}}>
                    <source src="video/Alex_Promo_Juego.mp4" type="video/mp4" />
                </video>
                <p style={{ color: 'white' }}>
                    Barqia Sports was born as a result of the merger of an Argentine company, known as Barqia, and a Spanish one, Padel Fantasy. Our contact occurred thanks to participation in a reference event for startups and entrepreneurs at an international level. After several months of conversations, reflections and exchange of passions, we had the extraordinary idea of founding Barqia Sports, a comprehensive fan engagement platform.
                </p>
                <p style={{ color: 'white' }}>
                    We share the same common interests and aspirations, focused on the application of cutting-edge and futuristic technology for the benefit of clubs, athletes and fans, with the purpose of creating a fully immersive platform with absolute connectivity between all the parties involved.
                </p>

                <Container style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '15px 40px' }}>
                    <Row>
                        <Col style={{ display: 'inline-block' }}>
                            <div>
                                <div>
                                    <img style={{ borderRadius: '100%', width: '85%'}} src='/img/barqia-felipe-barquin.png' />
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
                                <div>
                                    <br /><br />
                                    <a href='https://www.linkedin.com/in/felipebarquin/' target='_blank'>
                                        <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col style={{ display: 'inline-block', margin: '0 15px' }}>
                            <div>
                                <div>
                                    <img style={{ borderRadius: '100%', width: '85%'}} src='/img/barqia-fernando-carmona.png' />
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
                                <div>
                                    <br /><br />
                                    <a href='https://www.linkedin.com/in/fernandocarmonaarmengou/' target='_blank'>
                                        <img src='/img/view-my-linkedin-profile.png' style={{ width: '180px' }}/>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col style={{ display: 'inline-block' }}>
                            <div>
                                <div>
                                    <img style={{ borderRadius: '100%', width: '85%'}} src='/img/barqia-diego-gomez.png' />
                                </div>
                                <h1>
                                    Diego Gomez
                                </h1>
                                <h2>
                                    CTO
                                </h2>
                                <h3>
                                    Degree in Information Systems
                                </h3>
                                <div style={{ fontStyle: 'italic' }}>
                                    Project Manager Specialist of Interactive Space in VR/AR
                                </div>
                                <div>
                                    <br /><br />
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

export default AboutUs;