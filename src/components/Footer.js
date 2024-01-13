// Footer.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../images/greenLogo.svg';
import '../css/scss/_Footer.scss'; // Import the SCSS file

const Footer = () => {
  const [iconSize, setIconSize] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth > 768 ? 130 : 60);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={2} >
            <img src={logo} alt="Logo" className="icon" style={{width: `${iconSize}px`, height: `${iconSize}px` }}/>
          </Col>

          <Col md={3} className="mb-3">
            <h5 style={{ color: '#3F5B4D', fontWeight: '700' }}>موقع نبتتي</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="link">عن نبتتي</a></li>
              <li><a href="/" className="link">المنتجات</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h5  style={{ color: '#3F5B4D', fontWeight: '700' }}>مجتمع نبتتي</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="link">اهداء الى صديق</a></li>
              <li><a href="/" className="link">ارسل هدايا</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3" style={{ marginTop: '20px', color: '#3F5B4D', fontWeight: '700' }}>
            <Form className="d-flex flex-column align-items-start subscription-form">
              <Form.Group controlId="subscriptionForm" className="mb-0">
                <Form.Label className="mr-2">النشرة البريدية</Form.Label>
                <br />
                <Form.Text className="text-muted">كن مطلعًا على آخر الأخبار موقع نبتتي</Form.Text>
                <div className="d-flex">
                  <Form.Control type="email" placeholder="البريد الالكتروني" className="form-control" />
                  <Button type="submit" className="button">اشتراك</Button>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
