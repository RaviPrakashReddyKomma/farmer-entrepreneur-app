import React, { useState } from 'react';
import ProductList from './ProductList';

// Sample data for products
const initialProducts = [
  { id: 1, name: 'Organic Apples', price: 2.5 },
  { id: 2, name: 'Handmade Soap', price: 5.0 },
  { id: 3, name: 'Fresh Honey', price: 7.0 }
];

const BuyerDashboard = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} has been added to your cart.`);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // In a real application, you would integrate with a payment gateway here.
    alert("Checkout successful! Thank you for your purchase.");
    setCart([]);
  };

  return (
    <div>
      <h2>Buyer Dashboard</h2>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      
      <h3>Your Cart</h3>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} (Quantity: {item.quantity})
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Checkout
      </button>
    </div>
  );
};

export default BuyerDashboard;
