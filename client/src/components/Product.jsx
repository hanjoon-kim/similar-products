import React from 'react';
import '../style.css';

function Product(props) {
  const product = props.product;

  return (
    <div>
      <img src={`https://s3-us-west-1.amazonaws.com/hanjoonk/${product.url}`} />
      <div>
        {product.name}
      </div>
      <div>
        {product.rating}
        -
        {product.reviews}
      </div>
      <div>
        $
        {product.price}
      </div>
    </div>
  );
}

export default Product;
