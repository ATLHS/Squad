import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import '../../../css/mobile-navbar.css';

const MobileNavbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const test = () => {
        const body = document.body;
        body.classList.contains('disable-scroll') ? body.classList.remove('disable-scroll') : body.classList.add('disable-scroll');
    }

    return (
        <>
            <Navbar className={`${isOpen && "h-100"} mobile-navbar position-absolute w-100 d-flex flex-column align-items-start`} bg={!isOpen ? "transparent" : "dark"} expand="lg">
               <Row className="w-100 d-flex justify-content-between align-items-center ml-auto mr-auto">
                    <Navbar.Brand><Link className="text-decoration-none" to="/"><h2 className={!isOpen ? "text-white w-100 brand mb-0" : "text-white w-100 brand mb-0"}>SQU<i className={!isOpen ? "fas fa-heart text-dark heart" : "fas fa-heart squad-color heart"}></i>D</h2></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {setIsOpen(!isOpen); test();}} />
               </Row>
               
                    {/* <Nav className="ml-auto">
                        <Link className="text-white mr-5 lead text-decoration-none" to="/signup">Animer un live</Link>
                        <a className="text-white mr-5 lead text-decoration-none" href="mailto:contact@squadapp.fr">Contact</a>
                    </Nav> */}
                
            </Navbar>
        </>
    )
}

export default MobileNavbar;