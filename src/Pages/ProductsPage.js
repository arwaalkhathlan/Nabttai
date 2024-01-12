// ProductsPage.js
import React from 'react';
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import products from '../data/ProductsData'; 

import Header from "../components/Header";
import Footer from '../components/Footer';
// import UserReviewPage from "../components/UserReviewPage";
import ProductCard from "../components/Product_card";

import ProductCare from '../components/Productscare';


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
          price={product.price}
        />

           <div>
              <ProductCare 
               light={product.light}
                watering={product.watering}
                temp={product.temp}
                />
            </div>

      </Container>
      <Footer />
    </>
  );
}

export default ProductsPage;
