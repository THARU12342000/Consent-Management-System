import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/consent/submit', {
        customer: {
          name: formData.name,
          email: formData.email
        },
        productId: formData.productId
      });
      alert('Consent submitted! ✅');
      console.log(res.data);
    } catch (err) {
      alert('Error submitting consent ❌');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Consent Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <input name="productId" placeholder="Product ID" onChange={handleChange} required /><br /><br />
        <button type="submit">Submit Consent</button>
      </form>
    </div>
  );
}

export default App;
