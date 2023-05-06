import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CarBanner from '../../assets/img/img_car.png'

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col >
            <div className="ps-3 judul ms-lg-5 ps-lg-5 ">
            <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="pt-3 px-1">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Button variant="success"> Mulai Sewa Mobil</Button>
            </div>  
          </Col>
          <Col lg={3}>
            <div className="ps-3 pt-3 banner-1 p-lg-0 text-lg-end pt-lg-5">
                <img src={CarBanner} className="img-car ms-lg-0" width={"150%"}/>
            </div>
          </Col>
        </Row>
    
        </Container>
  

    </>
  )
}
