import './App.css'
import { Routes, Route } from "react-router-dom"
import {Home,Rental,OurService,WhyUs} from "./pages"
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/out-service' element={<OurService/>}/>
        <Route path='/whyus' element={<WhyUs/>}/>
        <Route path='/cars' element={<Rental/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
