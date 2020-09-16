import React from 'react';
//feature 1
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shoping Cart</a>
        <div>Admin</div>
      </header>
      <main>
        <ProductList />
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
