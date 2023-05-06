import { Row, Col, Card, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestiPhoto from "../../assets/img/img_photo.png"
import TestiPhoto2 from "../../assets/img/img_photo2.png"
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer/Index'

export default function Testimonial() {
  return (
      <>
          <Header/>
          <Container fluid className='py-lg-5 px-lg-5'>
          
              <Col xs={12} lg={12} className='text-center'>
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
              </Col>
            <div className="carousel-wrapper">
                <div className="swiper-container">
               
                    <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    navigation={{ 
                    nextEl: ".swipernext",
                    prevEl: ".swiperprev", 
                    }}
                    breakpoints={{ 
                    }}>
                    <SwiperSlide>
                        <Card>
                        <Card.Body>
                            <Row>
                            <Col md={12} lg={3} className='d-grid justify-content-center'>
                                <img src={TestiPhoto} />
                            </Col>
                            <Col md={12} lg={9}>
                            <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Illum explicabo, suscipit iusto fuga facilis
                                ea blanditiis vel odio aspernatur pariatur!
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                        <Card.Body>
                            <Row>
                            <Col md={12} lg={3} className='d-grid justify-content-center'>
                                <img src={TestiPhoto2} />
                            </Col>
                            <Col md={12} lg={9}>
                            <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Illum explicabo, suscipit iusto fuga facilis
                                ea blanditiis vel odio aspernatur pariatur!
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                        <Card.Body>
                            <Row>
                            <Col md={12} lg={3} className='d-grid justify-content-center'>
                                <img src={TestiPhoto} />
                            </Col>
                            <Col md={12} lg={9}>
                            <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Illum explicabo, suscipit iusto fuga facilis
                                ea blanditiis vel odio aspernatur pariatur!
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                        <Card.Body>
                            <Row>
                            <Col md={12} lg={3} className='d-grid justify-content-center'>
                                <img src={TestiPhoto2} />
                            </Col>
                            <Col md={12} lg={9}>
                            <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Illum explicabo, suscipit iusto fuga facilis
                                ea blanditiis vel odio aspernatur pariatur!
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                        <Card.Body>
                            <Row>
                            <Col md={12} lg={3} className='d-grid justify-content-center'>
                                <img src={TestiPhoto} />
                            </Col>
                            <Col md={12} lg={9}>
                            <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Illum explicabo, suscipit iusto fuga facilis
                                ea blanditiis vel odio aspernatur pariatur!
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                        <Card.Body>
                            <Row>
                            <Col md={12} lg={3} className='d-grid justify-content-center'>
                                <img src={TestiPhoto2} />
                            </Col>
                            <Col md={12} lg={9}>
                            <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Illum explicabo, suscipit iusto fuga facilis
                                ea blanditiis vel odio aspernatur pariatur!
                            </p>
                            <p className="fw-bold">
                                John Dee 32, Bromo
                            </p>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card> 
                    </SwiperSlide>
                    </Swiper>
                        <div className="swiper-navigation text-center pt-3">
                            <button className='swiperprev'>{'<'}</button>
                            <button className='swipernext'>{'>'}</button>
                        </div>
                </div> 
              </div>
             
          </Container>
<Footer/>
      </>
  )
}
