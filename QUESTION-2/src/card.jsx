import React from 'react';

function card({ productName, price, rating, discount, availability }) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <div>
        <h2>{productName}</h2>
        <h2>{price}</h2>
        <h2>{rating}</h2>
        <h2>{discount}</h2>
        <h2>{availability}</h2>
      </div>
    </div>
  );
}

export default card;
