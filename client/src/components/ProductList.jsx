import React from 'react';
import Product from './Product.jsx';
import styles from '../style.css';

function ProductList(props) {
  const products = props.products;
  return (
    <div className={styles.container}>
      {products.map(product => (
        <div>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
