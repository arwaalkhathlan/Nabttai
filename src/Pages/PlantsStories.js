import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import products from '../data/ProductsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import plant_info from '../images/plant_info.png';


function PlantsStories() {
  const { ProductId } = useParams();
  const product = products.find((product) => product.id === ProductId);

  if (!product) {
    return <div>Story not found</div>;
  }
  return (
    <div className="story-section">
      <Header />
      <Container className='py-4'>
        <div className="story-div">
          <div className="info">
            <div className="storylabel"><h1>{product.storyname}</h1></div>
            <div className="storyText">
              <p >{product.story}</p>
            </div>
          </div>
          <div className="image-plant">
            <img className='image-respon'
              src={product.imageUrl2}
              alt={product.name}
            />
          </div>
        </div>
        <div className="d-flex needs box-shadow my-4">
          <div className="box2_text">
            <text > احتياجات {product.name}</text>
          </div>
          <div className="plant_info">
            <img
              src={plant_info}
              alt={product.name}
            />
          </div>
          <Link to={`/ProdcutPage/${product.id}`} className="button_box2">{`إضافة ${product.name} للسلة`}</Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default PlantsStories;
