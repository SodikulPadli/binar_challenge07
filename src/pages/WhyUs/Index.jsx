import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import IconComplete from '../../assets/img/icon_complete.png'
import Icon24hrs from '../../assets/img/icon_24hrs.png'
import IconPrice from '../../assets/img/icon_price.png'
import IconProfesional from '../../assets/img/icon_professional.png'
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer/Index'

export default function WhyUs() {
  return (
      <>
          <Header/>
        <Container fluid className='py-lg-5 px-lg-5'>
              <Row>
                  <Col>
                    <h3 className="fw-bold">Why Us?</h3>
                      <p className="py-3">Mengapa harus pilih Binar Car Rental?</p>
                  </Col>
              </Row> 
             <Row >
                  <Col lg={3} className='pb-2 '>
                      <Card>
                          <Card.Body>
                            <div className="py-2">
                                <img src={IconComplete} />
                            </div>
                              <Card.Title>
                                   <h5 className="fw-bold">Mobil Lengkap</h5>
                              </Card.Title> 
                              <Card.Text>
                                   <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col lg={3} className='pb-2 '>
                      <Card>
                          <Card.Body>
                            <div className="py-2">
                                <img src={IconPrice} />
                            </div>
                              <Card.Title>
                                   <h5 className="fw-bold">Harga Murah</h5>
                              </Card.Title> 
                              <Card.Text>
                                   <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col lg={3} className='pb-2 '>
                      <Card>
                          <Card.Body>
                            <div className="py-2">
                                  <img src={Icon24hrs} />
                            </div>
                              <Card.Title>
                                   <h5 className="fw-bold">Layanan 24 Jam</h5>
                              </Card.Title> 
                              <Card.Text>
                                   <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col lg={3} className='pb-2 '>
                      <Card>
                          <Card.Body>
                            <div className="py-2">
                                <img src={IconProfesional} />
                            </div>
                              <Card.Title>
                                   <h5 className="fw-bold">Sopir Profesional</h5>
                              </Card.Title> 
                              <Card.Text>
                                   <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              </Row>
          </Container>
          <Footer/>
      </>
  )
}
