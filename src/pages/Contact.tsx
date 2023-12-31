import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = () => {
    return(
        <Container fluid style={{ background: '' }}>
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
                    <a href='Contact' className='nav-bar-selected-link'>contact</a>
                </div>
            </div>

            <Container>
                <Row>
                    <Col style={{ display: 'inline-block' }}>
                        <h1 className='neonText' >Connect with us</h1>
                        <img src='/img/world-map.png' />
                    </Col>

                    <Col style={{ display: 'inline-block' }}>
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

                        <InputGroup style={{height:'35%'}}>
                            <Form.Control placeholder='Your inquiry' as="textarea" aria-label="With textarea" />
                        </InputGroup>
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