import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thanks for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section">
      <h2 className="contact-section-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-section-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-section-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-section-input"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-section-textarea"
        />
        <button type="submit" className="contact-section-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
