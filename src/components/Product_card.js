// ProductCard.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import naseem from '../images/naseem.jpeg';

import '../css/products.css';

const ProductCard = ({ imageUrl, name, price, description, onPurchase }) => {
  return (
    <Card style={{ border: 'none', padding: '100px 100px 0 0' }}>
      <Row noGutters>
        <Col xs={12} md={6}>
          <Card.Img
            src={naseem}
            style={{ borderRadius: '180px', width: '618px', height: '827px' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <Card.Body className='product_body-text'>

            <div className='Product_label'>
            
            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft:'500px' }}>نسيم</Card.Title>
            <Card.Text style={{ fontSize: '1rem' }}>السعر: 30.0</Card.Text>

            </div>


            <Card.Text style={{ fontSize: '1rem', marginBottom: '10px' }}>نبتة بونساي في حوض رخام. جميل وأنيق ومناسب للطاولات الجانبية أو بجانب طاولة التلفزيون.</Card.Text>
            <Button
              variant="primary"
              onClick={onPurchase}
              style={{ marginTop: '10px' , width:'80%'}}
            >
              Purchase
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
