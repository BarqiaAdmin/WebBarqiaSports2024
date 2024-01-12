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
                    <img src='/img/render-events.jpg' style={{ marginTop: '-115px', width: '100%' }} />
                </Row>
            </Col>
        </Container>
    )
}

export default Events;