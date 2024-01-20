import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Contact = () => {
    return(
        <div>
            <Container fluid className='container-desktop' style={{ padding: '0' }}>
                <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
                <div id='nav-bar' style={{ padding: '20px 30px'}}>
                    <div style={{ display: 'inline-block' }}>
                        <img src='/img/barqia-symbol.png' />
                    </div>
                    <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                        <a href='/'>home</a>
                        <a href='AboutUs'>about us</a>
                        <a href='WhatWeDo'>what we do</a>
                        <a href='/Events'>events</a>
                        <a href='Contact' className='nav-bar-selected-link'>contact</a>
                    </div>
                </div>

                <Container style={{ marginBottom: '50px', padding: '0'}}>
                    <Row>
                        <Col className='col-lg-12' style={{ marginBottom: '50px' }}>
                            <h1 className='neonText' style={{ textAlign: 'center' }}>Connect with us</h1>
                        </Col>

                        <Col className='col-lg-3'></Col>
                        <Col className='col-lg-6'>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                placeholder="Email address"
                                aria-label="Email address"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="First name"
                                aria-label="First name"
                                aria-describedby="basic-addon2"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Last name"
                                aria-label="Last name"
                                aria-describedby="basic-addon2"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Company"
                                aria-label="Company"
                                aria-describedby="basic-addon2"
                                />
                            </InputGroup>

                            <InputGroup>
                                <Form.Control placeholder='Your inquiry' as="textarea" aria-label="With textarea" />
                            </InputGroup>

                            <br />

                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                <Button type="submit" style={{ background: '#16525F', fontSize: '20px', padding: '20px', color: 'white', }}>
                                    Submit
                                </Button>
                            </div>
                        </Col>
                        <Col className='col-lg-3'></Col>
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
                            <p style={{ color: 'white', fontSize: '15px', marginTop: '45px', padding: '0', textAlign: 'center', width: '100%' }}>
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
                                        <Nav.Link style={{
                                        color: 'white'}} href="/Events">EVENTS</Nav.Link>
                                        <Nav.Link style={{
                                        color: 'white', textDecoration: 'underline' }} href="/Contact">CONTACT</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                                <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', paddingBottom: '20px', position: 'relative', zIndex: '2' }}>
                                    <Row>
                                        <Col style={{ textAlign: 'center' }}>
                                            <div>

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
                
                <Container>
                    <h1 className='neonText' style={{ fontSize: '40px', textAlign: 'center' }}>Connect with us</h1>
                    <img src='/img/world-map.png' style={{ margin: '40px 0' }} />
                    <InputGroup className="mb-12">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                        placeholder="Email address"
                        aria-label="Email address"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-12">
                        <Form.Control
                        placeholder="First name"
                        aria-label="First name"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                    <InputGroup className="mb-12">
                        <Form.Control
                        placeholder="Last name"
                        aria-label="Last name"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                    <InputGroup className="mb-12">
                        <Form.Control
                        placeholder="Company"
                        aria-label="Company"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                    <InputGroup>
                        <Form.Control placeholder='Your inquiry' as="textarea" aria-label="With textarea" />
                    </InputGroup>

                    <InputGroup style={{ marginTop: '20x', textAlign: 'center' }}>
                        <Button style={{ background: '#16525F', fontSize: '20px', margin: 'auto', padding: '20px', color: 'white', }} >
                            Submit
                        </Button>
                    </InputGroup>
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

export default Contact;