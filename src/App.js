import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Location from './components/Location';
import About from './components/About';
import Contact from './components/Contact';
import Home from './Pages/Home';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import ShoppingCart from './components/Shopingcart';
import { CartProvider } from './CartContext';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
