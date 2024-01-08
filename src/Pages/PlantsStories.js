import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import products from '../data/ProductsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import plant_info from '../images/plant_info.png';

import '../css/products.css';

function PlantsStories() {
  const { ProductId } = useParams();
  const product = products.find((product) => product.id === ProductId);

  if (!product) {
    return <div>Story not found</div>;
  }
  const whiteBoxStyle = {
    background: '#fff',
    borderRadius: '49px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    marginTop: '20px',
  };

  const whiteBoxStyle2 = {
    background: '#fff',
    height: '320px',
    borderRadius: '50px',
    boxShadow: '0 4px 8px rgba(0.8, 0, 0, 0.8)',
    display: 'flex',
    margin: 'auto 25px',
    paddingLeft: '15px'
  };

  const imagePlantStyle = {
    flex: '1',
    borderRadius: '49px',
    overflow: 'hidden',
  };

  const imagePlantStyle2 = {
    flex: '1',
    borderRadius: '49px',
    overflow: 'hidden',
    width: '300px',
  };

  const infoStyle = {
    flex: '1',
    padding: '20px',
  };


  return (
    <div className="story-section">
      <Header />
      <Container className='py-4'>
        <div className="story-div" style={whiteBoxStyle}>
          <div className="info" style={infoStyle}>


            <div className="Storylabel"><h1>{product.storyname}</h1></div>
            <div className="StoryText">

              <p >{product.story}</p>

            </div>
          </div>
          <div className="image-plant" style={imagePlantStyle}>
            <img className='image-respon'
              src={product.imageUrl2}
              alt={product.name}
            />
          </div>
        </div>

        <div className="story-div" style={whiteBoxStyle2}>
          <div className="image-plant" style={imagePlantStyle2}>
            <img className='image-respon'
              src={product.imageUrl3}
              alt={product.name}
            />
          </div>

          <div className="box2_text">
            <text > احتياجات {product.name}</text>
          </div>

          <div className="plant_info">
            <img
              src={plant_info}
              alt={product.name}
            />

          </div>


          <Link to={`/OurProducts`} className="button_box2">
            لإضافة فيّ للسلة
          </Link>

        </div>

      </Container>
      <Footer />
    </div>
  );
}

export default PlantsStories;
