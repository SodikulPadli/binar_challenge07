import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import IconComplete from '../../assets/img/icon_complete.png'
import Icon24hrs from '../../assets/img/icon_24hrs.png'
import IconPrice from '../../assets/img/icon_price.png'
import IconProfesional from '../../assets/img/icon_professional.png'

export default function WhyUs() {
  return (
      <>
        <Container className='py-lg-5'>
              <Row className='pt-lg-5'>
                  <Col className='text-center text-md-start'>
                    <h3 className="fw-bold">Why Us?</h3>
                    <p className="py-3">Mengapa harus pilih Binar Car Rental?</p>
                  </Col>
              </Row> 
              <Row>
                  <Col className='pb-2'>
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
                  <Col className='pb-2'>
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
                  <Col className='pb-2'>
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
                  <Col className='pb-2'>
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
      </>
  )
}
