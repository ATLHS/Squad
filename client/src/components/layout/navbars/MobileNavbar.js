import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import '../../../css/mobile-navbar.css';

const MobileNavbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const test = () => {
        const body = document.body;
        body.classList.contains('disable-scroll') ? body.classList.remove('disable-scroll') : body.classList.add('disable-scroll');
    }

    return (
        <>
            <Navbar className={`${isOpen ? "h-100 slider-container" : "squad-background-color"} mobile-navbar position-absolute w-100 d-flex flex-column align-items-start`} expand="lg">
               <Row className="w-100 d-flex justify-content-between align-items-center ml-auto mr-auto">
                    <Navbar.Brand><Link className="text-decoration-none" to="/" onClick={() => setIsOpen(false)}><h2 className={!isOpen ? "text-white w-100 brand mb-0" : "text-white w-100 brand mb-0"}>SQU<i className={!isOpen ? "fas fa-heart text-dark heart" : "fas fa-heart squad-color heart"}></i>D</h2></Link></Navbar.Brand>
                    <Burger className="text-white" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
               </Row>
               {isOpen && 
               <Nav className="mb-auto mt-auto mr-auto ml-auto d-flex justify-content-center">
                    <Link className="text-white text-center lead text-decoration-none navLink" to="/signup" onClick={() => setIsOpen(false)}>Animer un live</Link>
                    <a className="text-white text-center lead text-decoration-none navLink" href="mailto:contact@squadapp.fr" onClick={() => setIsOpen(false)}>Contact</a>
                </Nav>
                }
            </Navbar>
        </>
    )
}

export default MobileNavbar;