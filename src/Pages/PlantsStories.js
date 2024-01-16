import React, { useState } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import products from '../data/ProductsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import plant_info from '../images/plant_info.png';
import BreadcrumbLink from '../components/BreadcrumbLink';
import ProductInquiryForm from '../components/ProductInquiryForm';
import emailjs from '@emailjs/browser';

import '../css/scss/_breadcrumbsLink.scss';

function PlantsStories() {

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

  const { ProductId } = useParams();
  const product = products.find((product) => product.id === ProductId);

  if (!product) {
    return <div>Story not found</div>;
  }

 
  return (
    <div className="story-section">
      <Header />
      <Container className='py-4'>
        <Container>
          <Breadcrumb className="breadcrumbs">
            <BreadcrumbLink to="/" label="الــرئـيـسـيـه" className="non-link" />
            <BreadcrumbLink to={`/products/${ProductId}`} label={product.storyname} active />
          </Breadcrumb>
        </Container>

        <div className="story-div">
          <div className="info">
            <div className="storylabel"><h1>{product.storyname}</h1></div>
            <div className="storyText">
              <p>{product.story}</p>
            </div>
          </div>
          <div className="image-plant">
            <img className='image-respon' src={product.imageUrl2} alt={product.name} />
          </div>
        </div>
        <div className="d-flex needs box-shadow my-4">
          <div className="box2_text">
            <text> احتياجات {product.name}</text>
          </div>
          <div className="plant_info">
            <img src={plant_info} alt={product.name} />
          </div>
          <button className="button_box2"  onClick={handleShow}>{`أنا مهتم بـ ${product.name} `}</button>
        </div>
      </Container>
      <Footer />
      <ProductInquiryForm
        show={show}
        handleClose={handleClose}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        setStateMessage={setStateMessage}
        onInquirySubmit={handleInquirySubmit}
      />
    </div>
  );
}

export default PlantsStories;
