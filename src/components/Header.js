import React, { useState } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import svgl from '../images/logo.svg';

import ProductInquiryForm from './ProductInquiryForm';
import emailjs from '@emailjs/browser';

function Header() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [/*stateMessage,*/ setStateMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInquirySubmit = (templateFormData) => {
    emailjs
      .send('service_br7pc65', 'template_d675cby', templateFormData, '0Vrk_eCV-opU4mZPo')
      .then((result) => {
        setStateMessage('تم إرسال البريد بنجاح');
        setShowAlert(true);
        console.log(result.status);
        handleClose();
      })
      .catch((error) => {
        setStateMessage('حدث خطأ ما لم يتم إرسال البريد');
        setShowAlert(true);
        console.log(error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="green-light-bg border-bottom-rad">
      <Container>
        <Link className='navbar-brand' to="/"><img className='icon-brand' src={svgl} alt='Logo' /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={`/`}>الرئيسية</Link>
            <Link className='nav-link' to={`/OurProducts`}>منتجاتنا</Link>
            <Link className='nav-link' to={`/AboutUs`}>عن نبتتي</Link>
          </Nav>
          <Nav className='sign-div gap-2'>
            <button className='sign-link sign-in' onClick={handleShow}>تسجيل </button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <ProductInquiryForm
        show={show}
        handleClose={handleClose}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        setStateMessage={setStateMessage}
        onInquirySubmit={handleInquirySubmit}
      />
    </Navbar>
  );
}

export default Header;
