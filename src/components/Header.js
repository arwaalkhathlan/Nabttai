import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import svgl from '../images/logo.svg';
import salla from '../images/sallaIcon.svg';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="green-light-bg border-bottom-rad">
            <Container>
                <Link className='navbar-brand' to="/"><img className='icon-brand' src={svgl} alt='Logo' /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-4">
                        <Link className='nav-link' to={`/`}>الرئيسية</Link>
                        <Link className='nav-link' to={`/OurProducts`}>منتجاتنا</Link>
                        <Link className='nav-link' to={`/AboutUs`}>عن نبتتي</Link>
                        <Link className='nav-link' to={`/`}><img src={salla} alt='sallaicon'/>السلة</Link>
                    </Nav>
                    <Nav className='sign-div gap-2'>
                        <Link className='nav-link sign-link'>تسجيل دخول</Link>
                        <Link className='nav-link sign-link'>
                            حساب جديد
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;