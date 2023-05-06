import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import CarBanner from '../../assets/img/img_car.png'
import Header from '../../components/Header/Index'
import Footer from '../../components/Footer/Index'
import {
  fetchMobil,
  selectMobil,
  selectMobilLoading
} from '../../app/reducers/mobil/mobilSlice'


export default function Carimobil() {
  const firstLoad = useRef(true)
  const mobil = useSelector(selectMobil)
  const mobilLoading = useSelector(selectMobilLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMobil())
    return () => {
        firstLoad.current = false
    }
  }, [])

    return (
        <>
        <Header />
        <Container fluid className='py-2 mt-5 px-lg-5' style={{ position:"relative"}} >
        <Row lg={2} md={2} sm={1}>
          <Col >
            <div className="">
            <h1 className="fw-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="pt-3 px-1">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>       
            </div>  
          </Col>
          <Col>
            <div>
                <img src={CarBanner} width={"107%"}/>
            </div>
          </Col>
        </Row>
      </Container>
                <Container style={{ marginTop:"-50px",position:"relative",zIndex:"9999" }}>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                        <div className="shadow p-3 rounded">
                          <Row className="row-cols-lg-auto g-0 justify-content-around">
                            <Col xs={12} lg={2}>
                              <label id="tipedriver" htmlFor="exampleDataList" className="form-label">Tipe Driver</label>
                              <Form.Select  aria-label="Default select example">
                                <option value="0">Pilih Tipe Driver</option>
                                <option value="Dengan Supir">Dengan Sopir</option>
                                <option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
                              </Form.Select>
                            </Col>

                            <Col xs={12} lg={2}>
                              <label htmlFor="exampleDataList" className="form-label">Tanggal</label>
                              <Form.Control type="date" id="tersedia" name="availableAt" placeholder="Select Date" />
                            </Col>

                            <Col xs={12} lg={2}>
                              <label htmlFor="exampleDataList" className="form-label">Waktu</label>
                              <Form.Control type="time" id="waktu" placeholder="Select Time" />
                            </Col>

                            <Col xs={12} lg={3}>
                              <label htmlFor="exampleDataList" className="form-label">Jumlah Penumpang (Optional)</label>
                              <Form.Control type="text" id="penumpang" placeholder="Jumlah Penumpang" />
                            </Col>        
                                                
                            <Button id="filter" type="submit" className="btn-filter">
                              Cari Mobil
                            </Button>
                            
                            </Row>
                        </div>           
                        </Col>
                    </Row>
                </Container>
                { mobilLoading === 'loading' && <div>Loading...</div>}
                <Container>
                  <Row className='mt-4' sm={6} lg={3}>          
                { mobil ? mobil.map((e,i) => (
                  
                  <Col key={i}>
                    <Card style={{ width: '20rem',marginBottom:"5px" }} >
                      <Card.Body>
                        <Image fluid src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)} alt={e.manufacture}/>
                        <h3><b>{e.manufacture}</b>(<b>{e.model}</b>)</h3>
                        <h4><b>Rp. {e.rentPerDay} / Hari</b></h4>

                        <p>Plat Nomer: <b>{e.plate}</b></p>
                        <p><b>{e.description}</b></p>
                        <p>Kapasitas : <b>{e.capacity}</b></p>
                        <p>Transmisi : <b>{e.transmission}</b></p>
                        <p>Tahun : <b>{e.year}</b></p>

                        <Button className='btn-pilih-mobil'>Pilih Mobil</Button>
                      </Card.Body>
                    </Card>
                  </Col>           
                ))       
                : <Col lg={12}> No Data</Col>}
                  </Row>
                </Container>
            <Footer />
        </>
    )
}