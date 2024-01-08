import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../images/greenLogo.svg';


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

  const footerStyle = {
    fontFamily: 'Tajawal, sans-serif',
    backgroundColor: '#F2F1EB',
    borderRadius: '30px 30px 0 0',
    boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px 15px',
  };

  const linkStyle = {
    color: '#3F5B4D',
    textDecoration: 'none',
    marginRight: '5px',
  };

  const linkStyleemail = {
    color: '#3F5B4D',
    marginRight: '-13px',
    listStyle: 'none',
  };

  const hoverLinkStyle = {
    color: 'black',
    textDecoration: 'underline',
  };

  const subscriptionFormStyle = {
    marginTop: '10px',
    color: '#3F5B4D',
    fontWeight: '700',
  };

  const formControlStyle = {
    borderRadius: '10px',
    backgroundColor: '#fff',
    color: '#000',
    width: '100%',
    height: '40px',
    margin: '10px 0',
  };

  const buttonStyle = {
    borderRadius: '10px',
    backgroundColor: '#3F5B4D',
    color: '#fff',
    height: '40px',
    marginTop: '9px',
    marginRight: '9px',
    width: '100px',
    border: 'none',
  };

  const iconStyle = {
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={2}>
            <img src={logo} alt="Logo" style={iconStyle} />
          </Col>

          <Col md={3} className="mb-3">
            <h5 style={{ color: '#3F5B4D', fontWeight: '700' }}>موقع نبتتي</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={linkStyle}>عن نبتتي</a></li>
              <li><a href="/" style={linkStyle}>المنتجات</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h5 style={{ color: '#3F5B4D', fontWeight: '700' }}>مجتمع نبتتي</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={linkStyle}>اهداء الى صديق</a></li>
              <li><a href="/" style={linkStyle}>ارسل هدايا</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3" style={subscriptionFormStyle}>
            <Form className="d-flex flex-column align-items-start">
              <Form.Group controlId="subscriptionForm" className="mb-0">
                <Form.Label className="mr-2">النشرة البريدية</Form.Label>
                <br />
                <Form.Text className="text-muted">كن مطلعًا على آخر الأخبار موقع نبتتي</Form.Text>
                <div className="d-flex">
                  <Form.Control type="email" placeholder="البريد الالكتروني" style={formControlStyle} />
                  <Button type="submit" style={buttonStyle}>اشتراك</Button>
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
