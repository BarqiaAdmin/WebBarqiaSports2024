import React from 'react';

import './Events.css';

import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const Events = () => {
    return(
        <Container fluid id='container-events'>
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                    <a href='/'>home</a>
                    <a href='AboutUs'>about us</a>
                    <a href='WhatWeDo'>what we do</a>
                    <a href='/Events' className='nav-bar-selected-link'>events</a>
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
                        <a href=''>
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
                            2023 Barqia - All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Events;