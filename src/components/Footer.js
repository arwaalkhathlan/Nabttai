// Footer.js

import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import icon_green from '../images/icon_green.png';

const Footer = () => {
  const footerStyle = {
    fontFamily: 'Tajawal, sans-serif',
    backgroundColor: '#F2F1EB',
    padding: '20px 0',
  };

  const linkStyle = {
    color: '#3F5B4D',
    textDecoration: 'none',
  };

  const hoverLinkStyle = {
    color: 'black',
    textDecoration: 'underline',
  };

  const subscriptionFormStyle = {
    marginTop: '10px',
    color: '#3F5B4D',
    fontweight: '700',
  };

  const formControlStyle = {
    borderRadius: '0',
    backgroundColor: '#fff',
    color: '#000', 
    width: '100%',
    height: '40px',
  };

  const iconStyle = {
    width: '119px',
    height: '130px',
    marginRight: '-50px',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={2}>
            <img src={icon_green} alt="Logo" style={iconStyle} />
          </Col>

          <Col md={4}>
            <h5 style={{ color: '#3F5B4D', fontweight: '700'}}>موقع نبتتي</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={linkStyle}>عن نبتتي</a></li>
              <li><a href="/" style={linkStyle}>المنتجات</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 style={{ color: '#3F5B4D', fontweight: '700', }}>مجتمع نبتتي</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={linkStyle}>اهداء الى صديق</a></li>
              <li><a href="/" style={linkStyle}>ارسل هدايا</a></li>
            </ul>
          </Col>

          <Col md={2} style={subscriptionFormStyle}>
            <Form>
              <Form.Group controlId="subscriptionForm">
                <Form.Label>النشرة البريدية</Form.Label>
                <br />
                <Form.Text className="text-muted">كن مطلعًا على آخر الأخبار موقع نبتتي</Form.Text>
                <Form.Control type="email" placeholder="البريد الالكتروني" style={formControlStyle} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
