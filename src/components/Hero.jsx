import React from 'react'

function Hero() {
  return (
   
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p>

          <div className="hero-btn">
            <button>Shop Now</button>
            
          </div>
                      
          <div className="shoping">
            <p>Also Availble on</p>
          </div>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="cart-image" />
          </div>

        </div>

        <div className="hero-image">
            <img src="/images/hero-image.png" alt="heroic-image" />
        </div>
    </main>
  )
}

export default Hero
