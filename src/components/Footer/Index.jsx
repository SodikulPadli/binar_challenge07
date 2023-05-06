import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgFacebook from '../../assets/img/icon_facebook.png'
import ImgInstagram from '../../assets/img/icon_instagram.png'
import ImgTwitter from '../../assets/img/icon_twitter.png'
import ImgMail from '../../assets/img/icon_mail.png'
import ImgTwitch from '../../assets/img/icon_twitch.png'
import Logo from '../../assets/img/logo.png'


export default function Footer() {
    return (
        <>
        <Container  className='fixed-bottom'>
          <Row>
            <Col lg={3}>
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </Col>
            <Col lg={3} className="fw-bold">
              <a href="#our-services">Our services</a>
              <a href="#why-us">Why Us</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#faq">FAQ</a>
            </Col>
            <Col lg={3}>
              <p>Connect with us</p>
              <span className="pe-2"><img src={ImgFacebook} alt=""/></span>
              <span className="pe-2"><img src={ImgInstagram} alt=""/></span>
              <span className="pe-2"><img src={ImgTwitter} alt=""/></span>
              <span className="pe-2"><img src={ImgMail} alt=""/></span>
              <span className="pe-2"><img src={ImgTwitch} alt=""/></span>
            </Col>
            <Col lg={3} className="pt-2">
              <p>Copyright Binar 2022</p>
              <div>
                <a className="navbar-brand" href="#home"> <img src={Logo} /></a>
              </div>
              
            </Col>
          </Row>
        </Container>
        </>
    )
}