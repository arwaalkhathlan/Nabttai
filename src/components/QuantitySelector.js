import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const QuantitySelector = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const quantities = [1, 2, 3, 4, 5];

  const handleSelect = (quantity) => {
    setSelectedQuantity(quantity);
  };


  return (
    <DropdownButton
      id="quantity-dropdown"
      title={`${selectedQuantity}`}
      variant="outline-secondary"
    >
      {quantities.map((quantity) => (
        <Dropdown.Item key={quantity} onClick={() => handleSelect(quantity)}>
          {quantity}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default QuantitySelector;
