import './App.css'
import { Routes, Route } from "react-router-dom"
import {Home,Rental,OurService,WhyUs,Testimonial,Faq,Carimobil} from "./pages"
import LoginForm from './components/Register/Index'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<Carimobil/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/out-service' element={<OurService/>}/>
        <Route path='/whyus' element={<WhyUs/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/cars' element={<Rental/>}/>
      </Routes>

    </>
  )
}

export default App
