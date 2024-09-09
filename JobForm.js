// src/components/JobForm.js
import React, { useState } from 'react';

const JobForm = ({ jobId }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd normally send the form data to a backend service
    console.log(`Name: ${name}, Phone: ${phone}, Job ID: ${jobId}`);
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thank you for applying! We will contact you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Phone</label>
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Apply</button>
    </form>
  );
};

export default JobForm;
