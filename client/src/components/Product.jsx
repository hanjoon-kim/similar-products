import React from 'react';
import '../style.css';

function Product(props) {
  const product = props.product;

  return (
    <div className="product">
      <img
        className="productImage"
        src={`https://s3-us-west-1.amazonaws.com/hanjoonk/${product.url}`}
      />
      <a href="#top">
        {product.name}
      </a>
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
