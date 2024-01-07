

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import logo from '../images/icon.png';
import svgl from '../images/logo.svg';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="green-light-bg pb-3 border-bottom-rad">
            <Container>
                <Navbar.Brand href="#home"><img className='icon-brand' src={svgl} alt='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">الرئيسية</Nav.Link>
                        <Nav.Link href="#pricing">منجاتنا</Nav.Link>
                        <Nav.Link href="#">عن نبتتي</Nav.Link>
                    </Nav>
                    <Nav className='gap-4 mb-4'>
                        <Nav.Link className='sign-link' href="">تسجيل دخول</Nav.Link>
                        <Nav.Link className='sign-link' href="">
                            حساب جديد
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;