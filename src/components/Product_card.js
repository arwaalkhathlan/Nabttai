import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import naseem from '../images/naseem.jpeg';
import Heart_icon from '../images/heart_icon.svg';
import '../css/products.css';
import ProductCare from './Productscare';

const ProductCard = ({ imageUrl, name, description, onPurchase }) => {
  const params = useParams();
  console.log(params.ProductId);

  return (
    <Container>
      <Card style={{ border: 'none', padding: '20px' }}>
        <Row>
          {/* Image Column */}
          <Col xs={12} md={6}>
            <Card.Img
              src={naseem}
              style={{ borderRadius: '140px', width: '100%', height: 'auto', maxWidth: '618px', maxHeight: '618px' }}
            />
          </Col>

          {/* Product Details Column */}
          <Col xs={12} md={6}>
            <Card.Body className='product_body-text'>

              {/* Product Label */}
              <div className='Product_label'>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '300px' }}>نسيم</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>30.0</Card.Text>
                <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>ر.س </Card.Text>
              </div>

              {/* Product Description */}
              <Card.Text style={{ fontSize: '1rem', marginBottom: '10px' }}>
                نبتة بونساي في حوض رخام. جميل وأنيق ومناسب للطاولات الجانبية أو بجانب طاولة التلفزيون.
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
