
//product_card.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import naseem from '../images/naseem.jpeg';
import Heart_icon from '../images/heart_icon.svg';
import '../css/products.css';
import ProductCare from './Productscare';

const ProductCard = ({ imageUrl, name, description, onPurchase }) => {
  const params = useParams();
  

  return (
    <Container style={{marginTop:'100px'}}>
      <Card style={{ border: 'none', padding: '20px' }}>
        <Row>
          {/* Image Column */}
          <Col xs={12} md={6}>
            <Card.Img
              src={imageUrl}
              style={{ borderRadius: '140px', width: '100%', height: 'auto', maxWidth: '618px', maxHeight: '618px' }}
            />
          </Col>

          {/* Product Details Column */}
          <Col xs={12} md={6}>
            <Card.Body className='product_body-text'>

              {/* Product Label */}
              <div className='Product_label'>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '300px' }}>{name}</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>30.0</Card.Text>
                <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>ر.س </Card.Text>
              </div>

              {/* Product Description */}
              <Row>
              <Col xs={9}>
              {Array.from({ length: 5 }).map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" style={{ marginRight: '2px' }}>
                  <path d="M7.38801 1.7444C8.04987 0.412301 9.95013 0.412301 10.612 1.7444L11.8274 4.19062C12.0895 4.71813 12.5931 5.08403 13.1758 5.17029L15.8779 5.57029C17.3493 5.78812 17.9365 7.59538 16.8741 8.63648L14.9232 10.5483C14.5025 10.9606 14.3102 11.5526 14.4082 12.1335L14.8628 14.8269C15.1103 16.2936 13.5729 17.4106 12.2545 16.7219L9.83336 15.4573C9.31125 15.1846 8.68875 15.1846 8.16664 15.4573L5.7455 16.7219C4.42706 17.4106 2.88971 16.2936 3.13724 14.8269L3.59181 12.1335C3.68983 11.5526 3.49747 10.9606 3.07676 10.5483L1.12585 8.63648C0.063477 7.59538 0.650692 5.78812 2.12212 5.57029L4.82419 5.17029C5.40688 5.08403 5.9105 4.71813 6.1726 4.19062L7.38801 1.7444Z" fill="#3F5B4D" />
                </svg>
              ))}
              </Col>
              </Row>
              <Card.Text style={{ fontSize: '1rem', marginBottom: '10px' }}>
                {description}
              </Card.Text>

              {/* Product Buttons */}
              <div className='Product_Button'>
                {/* Add to Cart Button */}
                <Button
                  variant="primary"
                  onClick={onPurchase}
                  style={{ marginTop: '10px', width: '100%', marginRight: '10px', color: 'white', backgroundColor: '#3F5B4D', border: 'none' }}
                >
                  اضف الى السله
                </Button>

                {/* Heart Icon Button */}
                <Button
                  onClick={onPurchase}
                  style={{ marginTop: '10px', width: 'calc(100% - 500px)', maxWidth: '50px', minWidth: '50px', height: '40px', color: 'white', backgroundColor: '#EBEFF8', border: 'none' }}
                >
                  <img src={Heart_icon} alt="Heart icon" style={{}} />
                </Button>
              </div>

              {/* Product Care Component */}
              <ProductCare />

            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductCard;
