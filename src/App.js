import React, { useState, useEffect } from 'react'

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddCart = async (productId, qty) => {
    setCart(await commerce.cart.add(productId, qty));
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);


  return (
    <div>
        <Navbar numItems={cart.total_items}/>
        <Products products={products} handleAddCart={ handleAddCart }/>
        <Cart />
    </div>
  )
}

export default App;