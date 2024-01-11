import React from 'react';

import './Hackathon2024.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const Hackathon2024 = () => {
    return (
        <Container fluid id='landing-evento'>
            {/* Barra de navegación */}
            <img id='navbar-laser' src='/img/navbar_laser.png' />
            <div id='nav-bar' style={{ padding: '20px 30px'}}>
                <div style={{ display: 'inline-block' }}>
                    <img src='/img/barqia-symbol.png' />
                </div>
                <div style={{ float: 'right' }}>
                    <a href='/' className='nav-bar-selected-link' >home</a>
                    <a href='AboutUs'>about us</a>
                    <a href='WhatWeDo'>what we do</a>
                    <a href='CaseStudies'>case studies</a>
                    <a href='Contact'>contact</a>
                </div>
            </div>
            {/* Barra de navegación */}

            <div>
                <img src='/img/robot_3.png' style={{ width: '30%' }} />
                <img src='/img/hackathon-titulo.png' style={{ width: '40%' }} />
                <img src='/img/robot_4.png' style={{ width: '30%' }} />
            </div>

            <Row style={{ padding: '0 120px', marginBottom: '60px'  }}>
                <Col>
                    <p>
                        El 26 de enero marca el inicio de la emocionante I Edición Hackathon Esports, uniendo a talentos gamers y empresas colaboradoras para desarrollar videojuegos profesionales que revolucionarán la experiencia de los fanáticos más allá de las gradas. Este evento potencia ideas innovadoras en deportes, videojuegos y programación, creando oportunidades y tecnologías de vanguardia. ¡Explora el futuro del entretenimiento con nosotros!
                    </p>

                    <h2 style={{ color: '#CB6BE6' }}>
                        «Diseñando el futuro de las experiencias deportivas»
                    </h2>
                </Col>
            </Row>

            <Carousel data-bs-theme="light" style={{ margin: 'auto', marginBottom: '60px', padding: '0 120px' }}>
                <Carousel.Item>
                    {/**
                    <video className='hide-on-mobile' muted loop autoPlay style={{ width: '50%'}}>
                        <source src='/videos/barqia-vr-7.mp4' />
                    </video>
                    */}
                    <img src='/img/barqia-sports-jam-1.jpg' width='100%' />
                    <Carousel.Caption>
                    {/**
                     <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/**
                    <video className='hide-on-mobile' muted loop autoPlay style={{ width: '50%'}}>
                        <source src='/videos/barqia-ai-2.mp4' />
                    </video>
                    */}
                    <img src='/img/barqia-hackjam.jpg' width='100%' />
                    <Carousel.Caption>
                    {/**
                     <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/**
                    <video className='hide-on-mobile' muted loop autoPlay style={{ width: '50%'}}>
                        <source src='/videos/barqia-vr-6.mp4' />
                    </video>
                    */}
                    <img src='/img/barqia-sports-jam-3.jpg' width='100%' />
                    <Carousel.Caption>
                    {/**
                     <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row style={{ padding: '0 120px' }}>
                <Col>
                    <p>
                        Hackathon Esports es una emocionante competición en la que tu podrás desarrollar personajes originales para un  videojuego de realidad virtual en el <strong>ESTADIO BARQIA</strong>.
                    </p>

                    <p>
                        En esta competición, podrás demostrar tus habilidades de diseño y programación al presentar personajes ante un jurado   de expertos.
                    </p>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center', zIndex: '1' }}>
                    <Row>
                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-certificate.png' />
                            <h2 className='barqia-purple-text'>
                                Certificados de participación
                            </h2>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-trophy.png' />
                            <h2>
                                <span className='barqia-purple-text'>Trofeos</span>
                            </h2>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-gift.png' />
                            <h2>
                                <span className='barqia-purple-text'>Gift cards</span>
                            </h2>
                        </Col>
                    </Row>
                    {/**
                    <img src='/img/barqia-certificate.jpg' />
                    */}
                </Col>

                <Col sm={12} lg={12}>
                    <h1 style={{ textAlign: 'center' }}>
                        <strong>PREMIOS</strong> 
                    </h1>

                    <ul style={{ textAlign: 'center' }}>
                        <li>PREMIO DEL PÚBLICO</li>
                        <li>PREMIO GENERAL: MEJOR IMPLEMENTACIÓN ELEJIDO POR JUEZ</li>
                        <li>PREMIO GANADOR E SPORTS</li>
                    </ul>
                </Col>
                
                <Col sm={12} lg={12} style={{ textAlign: 'center' }}>
                    <h1 style={{ textAlign: 'center' }}>
                        <strong>¡VIVE UNA EXPERIENCIA REAL!</strong>
                    </h1>

                    <p style={{ textAlign: 'center' }}>
                        ¡INCLUYE COMIDA Y BEBIDA!
                    </p>

                    <p style={{ textAlign: 'center' }}>
                        ¡AH! NO TE OLVIDES DE TRAER TU ORDENADOR (HARDWARE Y SOFTWARE) Y CUALQUIER GADGET QUE NECESITES PARA PARTICIPAR Y DESARROLLAR EL VIDEOJUEGO DURANTE EL EVENTO.
                    </p>

                    <p style={{ textAlign: 'center' }}>
                        ¡DEL RESTO NOS ENCARGAMOS NOSOTROS!
                    </p>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center', zIndex: '1' }}>
                    <Row>
                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-burger.png' />
                            <h2>
                                <span className='barqia-purple-text'>Comida y bebida</span>
                            </h2>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-computer.png' />
                            <h2>
                                <span className='barqia-purple-text'>Mesa de trabajo</span>
                            </h2>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-wifi.png' />
                            <h2>
                                <span className='barqia-purple-text'>Conexión a internet</span>
                            </h2>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-building.png' />
                            <h2>
                                <span className='barqia-purple-text'>Zona de descanso</span>
                            </h2>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <img className='img-symbol' src='/img/barqia-symbol-tshirt.png' />
                            <h2>
                                <span className='barqia-purple-text'>Kit de bienvenida</span>
                            </h2>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center' }}>
                    <h1 style={{ textAlign: 'center' }}>
                        <strong>AGENDA</strong>
                    </h1>

                    <ul style={{ textAlign: 'center' }}>
                        <li>9:00 - ENTRADA AL EVENTO</li>
                        <li>9:30 - DISCURSO DE INICIO</li>
                        <li>10:00 - COMIENZO DESARROLLO</li>
                        <li>14:00 - DESCANSO PARA COMIDA</li>
                        <li>18:00 - ENTREGA DE PROYECTO</li>
                        <li>18:30 - CHARLAS</li>
                        <li>19:30 - EMPIEZA CONCURSO</li>
                        <li>20:30 - ENTREGA DE PREMIOS</li>
                    </ul>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center' }}>
                    <h1 style={{ textAlign: 'center' }}>
                        <strong>¡PARTICIPA EN LA 1° EDICIÓN DE HACKATHON E SPORTS!</strong>
                    </h1>

                    <p style={{ textAlign: 'center' }}>
                        ¿TE ATREVES A DESARROLLAR UN PERSONAJE EN UN DÍA?<br />
                        INSCRIPCIONES ABIERTAS HASTA EL 24, ¡PLAZAS LIMITADAS!
                    </p>

                    <p style={{ textAlign: 'center' }}>
                        COMPLETA EL SIGUIENTE FORMULARIO E INDICA SI PARTICIPAS DE FORMA INDIVIDUAL O EN EQUIPO
                    </p>

                    <Row>
                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <h1>
                                <span>Quiero inscribirme</span>
                            </h1>
                        </Col>

                        <Col style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(256, 256, 256, 0.2)',  borderRadius: '10px', margin: '5px', textAlign: 'center' }}>
                            <h1>
                                <span>Conoce las bases</span>
                            </h1>
                        </Col>
                    </Row>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center' }}>
                    <h1>
                        CÓMO LLEGAR
                    </h1>

                    <p style={{ textAlign: 'center' }}>
                        EL EVENTO TENDRÁ LUGAR EN EL CAMPUS DEL VIDEOJUEGO DE MADRID IN GAME, QUE SE UBICA EN LA CASA DE CAMPO Y CUENTA CON 3 PABELLONES.
                    </p>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center' }}>
                    <h1>
                        C. DE BAILÉN, 41, 28005 MADRID
                    </h1>

                    <p style={{ textAlign: 'center' }}>
                        LLEGA AL CAMPUS CON LAS LÍNEAS DE BUS EMT 31, 33, 36 Y 39, PARADAS 879 Y 880. 
                        LAS ESTACIONES DE METRO MÁS CERCANAS SON ALTO EXTREMADURA Y LAGO.
                    </p>

                    <p style={{ textAlign: 'center' }}>
                        MADRID IN GAME TAMBIÉN OFRECE EL USO DE SU PARKING DURANTE LOS TRES DÍAS.
                    </p>
                </Col>

                <Col style={{ textAlign: 'center', zIndex: '1' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6075.695832667586!2d-3.7127015!3d40.4122198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d80511300f%3A0x9e5733dc0a37043b!2sC.%20de%20Bail%C3%A9n%2C%2041%2C%2028005%20Madrid%2C%20Spain!5e0!3m2!1sen!2sar!4v1699274897909!5m2!1sen!2sar" style={{ border: '0', height: '400px', margin: '40px 0', width: '100%'}} loading="lazy"></iframe>

                    <Button  style={{ padding: '15px 0'}}>
                        Cómo llegar
                    </Button>
                </Col>

                <Col sm={12} lg={12} style={{ textAlign: 'center' }}>
                    <a href=''>
                        AVISOL LEGAL Y COOKIES
                    </a>

                    <a href=''>
                        PRIVACIDAD
                    </a>
                </Col>
            </Row>
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

export default Hackathon2024;