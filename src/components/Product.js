// ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import naseem from '../images/naseem.jpeg';

const ProductCard = ({ imageUrl, name, price, description, onPurchase }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} style={{ borderRadius: '15px', width: '300px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary" onClick={onPurchase}>
          Purchase
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
