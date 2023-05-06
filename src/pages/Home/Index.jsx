import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CarBanner from '../../assets/img/img_car.png'
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer/Index'

export default function Home() {
  return (
    <>
      <Header/>
      <Container fluid className='py-2 mt-5 px-lg-5' >
        <Row lg={2} md={2} sm={1}>
          <Col >
            <div className="">
            <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="pt-3 px-1">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <NavLink  to="/cars" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              <Button variant="success"> Mulai Sewa Mobil</Button>
            </NavLink>            
            </div>  
          </Col>
          <Col>
            <div >
                <img src={CarBanner} width={"107%"}/>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}
