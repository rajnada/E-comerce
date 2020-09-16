import React, { useState } from 'react';
import data from './data.json';
//feature 1

import Products from './components/Products';

const App = () => {
  const [products, setproducts] = useState(data.products);
  const [size, setsize] = useState('');
  const [sort, setsort] = useState('');
  return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shoping Cart</a>
        <div>Admin</div>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Products product={products}></Products>
          </div>
          <div className='sidebar'></div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
};

export default App;
