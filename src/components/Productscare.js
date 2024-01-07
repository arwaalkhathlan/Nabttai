import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import plant_sun from '../images/plant_sun.png'; 
import plant_water from '../images/plant_water.png';
import plant_temp from '../images/plant_temp.png';
import '../css/products.css';

const ProductCare = () => {
  return (
    <Container>
      <Row className='Product_care'>
        <Col xs={12} md={8} lg={6}>
          <label style={{ fontWeight: 'bold' }}>طريقة العناية</label>
          <div className="care-item">
            <img src={plant_sun} alt="plant_sun" className="care-image" />
            <div className="care-content">
              <label style={{ fontWeight: 'bold', marginTop: '50px' }}>الإضاءة</label>
              <p>تحتاج النبتة الى ضوء ساطع إلى متوسط مرشح مثل ضوء النافذة أو الانارة الصناعية للغرفة.</p>
            </div>
          </div>
          <div className="care-item">
            <img src={plant_water} alt="plant_water" className="care-image" />
            <div className="care-content">
              <label style={{ fontWeight: 'bold' }}>الري</label>
              <p>لا يتم ري النبتة إلا بعد جفاف التربة.</p>
            </div>
          </div>
          <div className="care-item">
            <img src={plant_temp} alt="plant_temp" className="care-image" />
            <div className="care-content">
              <label style={{ fontWeight: 'bold' }}>الحرارة</label>
              <p>تحتاج النبتة الى جو معتدل يناسبها درجة حرارة الغرفة الطبيعية، والجو الدافئ حتى 35 درجة مئوية.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCare;
