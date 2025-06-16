import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'
import cartIcon from '../Assets/cart_icon.jpg'

function Navigation() {

  const {cartItems} = useCart();
  return (
    <nav className='container'>
      <div className="logo">
        
        <Link to="/">
         <img src="/images/logo.png" alt="logo" />
        </Link>
      </div>
      <ul>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        

        
      </ul>
      
       {/* <Link to="/login">
       <button>Login</button>
       </Link>
       <Link to="/admin" className="nav-btn">Admin</Link>  */}
       <div className="nav-buttons">
  <Link to="/login" className="nav-btn">Login</Link>
  <Link to="/admin" className="nav-btn">Admin</Link> {/* ✅ ADD THIS */}
</div>

       <Link to="/cart" className="cart-icon">
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </Link>
      
    </nav>
  )
}

export default Navigation
