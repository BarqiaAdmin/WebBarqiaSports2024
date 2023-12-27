import React from 'react';

import Container from 'react-bootstrap/Container';

const AboutUs = () => {
    return(
        <Container style={{ background: '' }}>

            <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                    <a href='/'>home</a>
                    <a href='WhatWeDo'>what we do</a>
                    <a href='AboutUs'>about us</a>
                    <a href=''>case studies</a>
                    <a href=''>contact</a>
                </div>
            </div>
            <img id='logo-inicio-reflejo' src='/img/Logo_Inicio_Reflejo.png' style={{ marginLeft: '40px', position: 'relative', zIndex: '1' }} />

            <img src='/img/about-us.png' style={{ marginTop: '-298px', position: 'relative', width: '100%', zIndex: '0' }} />
        </Container>
    )
}

export default AboutUs;