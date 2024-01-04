import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return(
        <Container style={{ background: '' }}>
            <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                    <a href='/'>home</a>
                    <a href='AboutUs'>about us</a>
                    <a href='WhatWeDo'>what we do</a>
                    <a href='CaseStudies'>case studies</a>
                    <a href='Contact' className='nav-bar-selected-link' >contact</a>
                </div>
            </div>

            <Container style={{ position: 'relative'}} >
                <Row>
                    <Col>
                        <h1 style={{ textAlign: 'center' }} >
                            Connect with us
                        </h1>
                        <p>
                            <img src='/img/barqia-map.png' style={{ margin: '20px 0', width: '100%' }} />
                        </p>
                    </Col>
                    <Col lg={6} style={{ margin: 'auto' }}>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Name:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your first name' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Last name:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your last name' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Email address:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your email address' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Enquiry:
                                </Form.Label>
                                <Form.Control as='textarea' rows={3} />
                            </Form.Group>
                            <Form.Group style={{ margin: '20px 0', textAlign: 'center'}} >
                                <p>
                                    <Button className='barqia-button' type='submit'>
                                        Send query
                                    </Button>
                                    <br />
                                    We will answer you shortly.
                                </p>
                                
                            </Form.Group>
                        </Form>
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
                        <p style={{ color: 'white', fontSize: '15px', marginTop: '45px', padding: '0', textAlign: 'center', width: '100%' }}>
                            2023 Barqia - All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact;