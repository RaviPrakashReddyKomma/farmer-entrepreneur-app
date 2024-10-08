import React from 'react';
// Ensure you import the CSS file

const ProductList = ({ products, onAddToCart, onViewDetails }) => {
  return (
    <div className="product-list-container">
      <h3 className="product-list-title">Available Products</h3>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="product-item">
              <span className="product-name">{product.name}</span> - <span className="product-price">${product.price.toFixed(2)} USD</span>
              <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
              <button className="view-details-button" onClick={() => onViewDetails(product)}>View Details</button>
            </li>
          ))
        ) : (
          <li className="no-products">No products available</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
