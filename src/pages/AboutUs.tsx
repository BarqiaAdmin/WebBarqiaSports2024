import React from 'react';

import './AboutUs.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return(
        <Container id='container-about-us' style={{ background: '' }}>
            <img id='navbar-laser' src='/img/navbar_laser.png' style={{ position: 'relative', zIndex: '1' }} />
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right', position: 'relative', zIndex: '2' }}>
                    <a href='/'>home</a>
                    <a href='AboutUs' className='nav-bar-selected-link' >about us</a>
                    <a href='WhatWeDo'>what we do</a>
                    <a href='CaseStudies'>case studies</a>
                    <a href='Contact'>contact</a>
                </div>
            </div>

            <Container>
                <img src='/img/our-mission.jpg' style={{ marginTop: '-115px', width: '100%'}} />
                
                <h1 id='h1-about-us-our-mission' style={{ background: '#171618', color: 'white', marginBottom: '-5px', textAlign: 'center' }}  >
                    OUR MISSION
                </h1>

                <p style={{ color: 'white' }}>
                    Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world.
                </p>
                <div>
                    <p style={{ color: 'white' }}>
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
                            <p style={{ color: 'white' }}>
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
                    </div>
                </div>

                

                <h1>
                    ABOUT US
                </h1>
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
                        <p style={{ color: 'white', fontSize: '15px', marginTop: '45px', textAlign: 'center' }}>
                            2023 Barqia - All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default AboutUs;