import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import FarmerPage from './pages/FarmerPage';
import BuyerPage from './pages/BuyerPage';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import LandingPage from './pages/LandingPage'; // Import the LandingPage
import './styles.css';

// Sample products array (define this at the top)
const products = [
  {
    id: 1,
    name: "Handmade Soap",
    price: 5,
    description: "Organic handmade soap made from local ingredients.",
    category: "Health",
    quantity: 50,
  },
  {
    id: 2,
    name: "Dried Fruits",
    price: 10,
    description: "Assorted dried fruits directly from the farm.",
    category: "Food",
    quantity: 100,
  },
  {
    id: 3,
    name: "Fresh Honey",
    price: 15,
    description: "Pure organic honey sourced from rural farms.",
    category: "Food",
    quantity: 75,
  }
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Add LandingPage route */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/product/:productId" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
