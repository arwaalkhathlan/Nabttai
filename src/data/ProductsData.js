// ProductData.js
import React from 'react';
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';
import fe from '../images/fe.jpeg';
import naseem from '../images/naseem.jpeg';
import sabra from '../images/sabra.png';

const productData = [
  {
    id: 1,
    name: 'fe',
    imageUrl: fe,  
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'naseem',
    imageUrl: naseem,  
    price: 29.99,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'sabra',
    imageUrl: sabra,  
    price: 39.99,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const ProductDataPage = () => {
  return (
    <Container>
      <h1 className="text-center">Product Data Page</h1>
      <div>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
            onPurchase={() => console.log(`Purchase ${product.name}`)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductDataPage;
