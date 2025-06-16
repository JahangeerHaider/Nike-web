import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', image: '' });

  useEffect(() => {
    const stored = localStorage.getItem('adminProducts');
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.image) return;
    const id = Date.now();
    setProducts([...products, { ...newProduct, id }]);
    setNewProduct({ title: '', price: '', image: '' });
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updateProduct = (id, key, value) => {
    setProducts(products.map(p => p.id === id ? { ...p, [key]: value } : p));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Product Management</h2>
      <div className="admin-form">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="admin-products">
        {products.map((product) => (
          <div key={product.id} className="admin-product">
            <img src={product.image} alt={product.title} />
            <input
              type="text"
              value={product.title}
              onChange={(e) => updateProduct(product.id, 'title', e.target.value)}
            />
            <input
              type="number"
              value={product.price}
              onChange={(e) => updateProduct(product.id, 'price', e.target.value)}
            />
            <button onClick={() => removeProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
