// ProductsPage.js
import React from 'react';
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import products from '../data/ProductsData'; 

import Header from "../components/Header";
import Footer from '../components/Footer';
import UserReviewPage from "../components/UserReviewPage";
import ProductCard from "../components/Product_card";


function ProductsPage() {
  const { ProductId } = useParams();
  const product = products.find((product) => product.id === ProductId);

  if (!product) {
    
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <Container>

        
        <ProductCard
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
        />

        <Container className="review-container">
          <label className="review_title">المراجعات</label>
          <br />
          <text className="review_sub-title">  في نبتتي نحرص على أراكم </text>
          <UserReviewPage />
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default ProductsPage;
