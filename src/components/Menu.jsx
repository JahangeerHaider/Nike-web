// import React from 'react';
// import { useCart } from '../CartContext';
// import shoe1 from '../Assets/shoe1.jfif';
// import shoe2 from '../Assets/shoe2.jfif';
// import shoe3 from '../Assets/shoe3.jfif';
// import shoe4 from '../Assets/shoe4.jfif';
// import shoe5 from '../Assets/shoe5.jfif';
// import shoe6 from '../Assets/shoe6.jfif';

// const Menu = () => {
//   const { addToCart } = useCart();

//   const products = [
//     { id: 1, img: shoe1, title: "Air Jordan 4", price: 180 },
//     { id: 2, img: shoe2, title: "Dunk Low Orewood", price: 150 },
//     { id: 3, img: shoe3, title: "Air Max DN", price: 160 },
//     { id: 4, img: shoe4, title: "Air Jordan 1 Purple", price: 190 },
//     { id: 5, img: shoe5, title: "Dunk Low Purple Ink", price: 170 },
//     { id: 6, img: shoe6, title: "Air Jordan 6 Yellow", price: 200 },
//   ];

//   return (
//     <div className="menu">
//       <h2 className="menu-title">Top Picks</h2>
//       <div className="menu-items">
//         {products.map((product) => (
//           <div className="menu-card" key={product.id}>
//             <img src={product.img} alt={product.title} />
//             <div className="product-details">
//               <h3>{product.title}</h3>
//               <p>${product.price}</p>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import shoe1 from '../Assets/shoe1.jfif';
import shoe2 from '../Assets/shoe2.jfif';
import shoe3 from '../Assets/shoe3.jfif';
import shoe4 from '../Assets/shoe4.jfif';
import shoe5 from '../Assets/shoe5.jfif';
import shoe6 from '../Assets/shoe6.jfif';

const Menu = () => {
  const { addToCart } = useCart();

  const [filter, setFilter] = useState({ category: "", size: "", price: "" });

  const products = [
    { id: 1, img: shoe1, title: "Air Jordan 4", price: 180, category: "Basketball", size: 42 },
    { id: 2, img: shoe2, title: "Dunk Low Orewood", price: 150, category: "Casual", size: 41 },
    { id: 3, img: shoe3, title: "Air Max DN", price: 160, category: "Running", size: 43 },
    { id: 4, img: shoe4, title: "Air Jordan 1 Purple", price: 190, category: "Basketball", size: 44 },
    { id: 5, img: shoe5, title: "Dunk Low Purple Ink", price: 170, category: "Casual", size: 42 },
    { id: 6, img: shoe6, title: "Air Jordan 6 Yellow", price: 200, category: "Basketball", size: 45 },
  ];

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filtered = products.filter((p) => {
    const matchCategory = filter.category ? p.category === filter.category : true;
    const matchSize = filter.size ? p.size === parseInt(filter.size) : true;
    const matchPrice = filter.price
      ? (filter.price === "low" ? p.price <= 160 : p.price > 160)
      : true;
    return matchCategory && matchSize && matchPrice;
  });

  return (
    <div className="menu">
      <h2 className="menu-title">Top Picks</h2>

      <div className="filters">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="Basketball">Basketball</option>
          <option value="Casual">Casual</option>
          <option value="Running">Running</option>
        </select>

        <select name="size" onChange={handleFilterChange}>
          <option value="">All Sizes</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>

        <select name="price" onChange={handleFilterChange}>
          <option value="">All Prices</option>
          <option value="low">Under $160</option>
          <option value="high">Above $160</option>
        </select>
      </div>

      <div className="menu-items">
        {filtered.map((product) => (
          <div className="menu-card" key={product.id}>
            <img src={product.img} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
