import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="navbar-bg">
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink  to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <img src={Logo} />
                        </NavLink> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{
                            fontSize: '14px',
                            fontWeight: '400',
                            color: '#000000'
                        }}
                        >
    
                            <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px",padding:"5px",marginRight:"15px"}} to="/out-service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                 Our Services
                            </NavLink> 
                            <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px",padding:"5px",marginRight:"15px"}} to="/whyus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                 Why Us
                            </NavLink> 
                            <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px",padding:"5px",marginRight:"15px"}} to="/testimonial" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                 Testimonial
                            </NavLink> 
                            <NavLink style={{textDecoration:"none",color:"black",fontSize:"15px",padding:"5px",marginRight:"15px"}} to="/faq" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                 FAQ
                            </NavLink> 
                            <NavLink  to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <Button variant="success">Register</Button>{' '}
                            </NavLink> 
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}