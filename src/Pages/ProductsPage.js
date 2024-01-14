import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import products from '../data/ProductsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/Product_card';
import ProductCare from '../components/Productscare';
import BreadcrumbLink from '../components/BreadcrumbLink';


import '../css/scss/_breadcrumbsLink.scss';

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
      <Container >
        <Breadcrumb className="breadcrumbs">
          <BreadcrumbLink to="/" label="الــرئـيـسـيـه" className="non-link" />
          <BreadcrumbLink to="/products" label="مـنـتـجـاتـنـا" className="non-link" />
          <BreadcrumbLink to={`/products/${ProductId}`} label={product.name} active />
        </Breadcrumb>
      </Container>



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
