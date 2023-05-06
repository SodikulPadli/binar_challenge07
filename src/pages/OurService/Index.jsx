import React from 'react'
import CheckList from '../../assets/img/checklist.png'
import Service from '../../assets/img/img_service.png'
import { Container,Row,Col } from 'react-bootstrap'

export default function OurService() {
  return (
      <>
          <Container className='my-5'> 
              <Row>
                  <Col >
                    <div className="align-items-center justify-content-center text-center ps-lg-5 ps-0">
                        <img src={Service} alt="" width="80%"/>
                    </div>
                  </Col>
                  <Col>
                    <div className="pt-5 px-2">
                        <h3 className="fw-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p className="pt-3">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                        </p>
                        <ul>
                            <li><span><img src={CheckList} alt=""/></span><span className="ps-3">Mobil Dengan Supir di Bali 12 Jam Mobil Dengan Supir di Bali 12 Jam</span></li>
                            <li><span><img src={CheckList} alt=""/></span><span  className="ps-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</span></li>
                            <li><span><img src={CheckList} alt=""/></span><span  className="ps-3">Sewa Mobil Jangka Panjang Bulanan</span></li>
                            <li><span><img src={CheckList} alt=""/></span><span  className="ps-3">Gratis Antar - Jemput Mobil di Bandara</span></li>
                            <li><span><img src={CheckList} alt=""/></span><span  className="ps-3">Layanan Airport Transfer / Drop In Out</span></li>
                        </ul>
                    </div>
                  </Col>
              </Row>     
          </Container>
  

      </>
  )
}
