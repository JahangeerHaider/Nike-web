import React from 'react';


const Location = () => {
  return (
    <div className="location">
      <h2>Find Our Store</h2>
      <p>Visit our flagship Nike store at the heart of the city!</p>

      <div className="map-container">
        <iframe
          title="Nike Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3154260831316!2d-122.42067998468192!3d37.779276979758714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7723e8c3%3A0x441f9e7bde2571d5!2sNike%20San%20Francisco!5e0!3m2!1sen!2sus!4v1628445555057!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="store-info">
        <p><strong>Address:</strong>UIIT</p>
        <p><strong>Hours:</strong> 10AM - 9PM (Mon-Sat), 11AM - 7PM (Sun)</p>
        <p><strong>Phone:</strong> (+92) 12345678901</p>
      </div>
    </div>
  );
};

export default Location;
