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
import { NavLink } from "react-router-dom";


export default function Footer() {
    return (
        <>
        <Container fluid >
          <Row  lg={4} md={4} sm="auto" xs="auto">
            <Col>
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </Col>
            <Col className="fw-bold">
               <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/out-service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  <p>Our Services</p>
                </NavLink> 
                <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/whyus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                 <p> Why Us</p>
                </NavLink> 
                <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/testimonial" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  <p>Testimonial</p> 
                </NavLink> 
                <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px"}} to="/faq" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                 <p>FAQ</p>
                </NavLink> 
            </Col>
            <Col>
              <p>Connect with us</p>
              <span className="pe-2"><img src={ImgFacebook} alt=""/></span>
              <span className="pe-2"><img src={ImgInstagram} alt=""/></span>
              <span className="pe-2"><img src={ImgTwitter} alt=""/></span>
              <span className="pe-2"><img src={ImgMail} alt=""/></span>
              <span className="pe-2"><img src={ImgTwitch} alt=""/></span>
            </Col>
            <Col>
              <p>Copyright Binar 2022</p>
              <div>
                <a className="text-end" href="/"> <img src={Logo} /></a>
              </div>
              
            </Col>
          </Row>
        </Container>
        </>
    )
}