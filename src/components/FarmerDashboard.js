import React, { useState } from 'react';
import '../styles/FarmerDashboard.css';
// Sample data for products (you can replace this with an API call)
const initialProducts = [
  { id: 1, name: 'Organic Carrots', price: 1.5, quantity: 50 },
  { id: 2, name: 'Free-Range Eggs', price: 3.0, quantity: 100 },
  { id: 3, name: 'Homemade Jam', price: 4.0, quantity: 30 }
];

const FarmerDashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity)
    };
    setProducts([...products, newProduct]);
    resetForm();
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProductId
        ? { ...product, name, price: parseFloat(price), quantity: parseInt(quantity) }
        : product
    );
    setProducts(updatedProducts);
    resetForm();
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setQuantity('');
    setEditingProductId(null);
  };

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <p>List products, manage inventory, and interact with buyers.</p>

      <h3>{editingProductId ? 'Edit Product' : 'Add Product'}</h3>
      <form onSubmit={(e) => {
          e.preventDefault();
          editingProductId ? handleUpdateProduct() : handleAddProduct();
        }}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            min="0"
          />
        </div>
        <button type="submit">{editingProductId ? 'Update Product' : 'Add Product'}</button>
      </form>

      <h3>Current Inventory</h3>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)} (Quantity: {product.quantity})
              <button onClick={() => handleEditProduct(product)}>Edit</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No products listed</li>
        )}
      </ul>
    </div>
  );
};

export default FarmerDashboard;
