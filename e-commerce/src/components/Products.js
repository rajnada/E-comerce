import React from 'react';
import formatCurrency from '../utils';

const Products = (props) => {
  return (
    <div>
      <ul className='products'>
        {props.product.map((product) => (
          <li key={product._id}>
            <div className='product'>
              <a href={'#' + product._id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
              <div className='product-price'>
                <div>{formatCurrency(product.price)}</div>
                <button className='button primary'>Add To Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
