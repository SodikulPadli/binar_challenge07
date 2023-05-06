import React from 'react'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer/Index'

export default function Faq() {
  return (
      <>
          <Header/>
          <Container fluid className='py-lg-5 px-lg-5'>
              <Row>
                  <Col>
                    <h3 className="fw-bold">Frequently Asked Question</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>    
                  </Col>
                  <Col>
                      <Accordion defaultActiveKey="0" flush>
                          <Accordion.Item eventKey="0" className='mb-3 border border-1'>
                              <Accordion.Header> Apa saja syarat yang dibutuhkan?</Accordion.Header>
                              <Accordion.Body>
                                  <strong>This is the second accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. 
                              </Accordion.Body>
                           </Accordion.Item>
                          <Accordion.Item eventKey="2" className='mb-3 border border-1'>
                              <Accordion.Header>   Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                              <Accordion.Body>
                                  <strong>This is the second accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. 
                              </Accordion.Body>
                           </Accordion.Item>
                          <Accordion.Item eventKey="3" className='mb-3 border border-1'>
                              <Accordion.Header> Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                              <Accordion.Body>
                                  <strong>This is the second accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. 
                              </Accordion.Body>
                           </Accordion.Item>
                          <Accordion.Item eventKey="4" className='mb-3 border border-1'>
                              <Accordion.Header> Apakah Ada biaya antar-jemput?</Accordion.Header>
                              <Accordion.Body>
                                  <strong>This is the second accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. 
                              </Accordion.Body>
                           </Accordion.Item>
                          <Accordion.Item eventKey="5" className='mb-3 border border-1' >
                              <Accordion.Header>  Bagaimana jika terjadi kecelakaan</Accordion.Header>
                              <Accordion.Body>
                                  <strong>This is the second accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. 
                              </Accordion.Body>
                           </Accordion.Item>
                      </Accordion>
                  </Col>
              </Row>  
          </Container>
          <Footer/>
      </>
  )
}
