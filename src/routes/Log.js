import React, { useState } from 'react';
import './LogStyles.css';
const AccountForm = () => {
  const [formType, setFormType] = useState('signup'); // 'signup' or 'login'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    role: 'client', // default to 'client'
    profession: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to your server or API endpoint
    console.log(formData);
  };

  const toggleFormType = () => {
    setFormType(formType === 'signup' ? 'login' : 'signup');
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedOption('');
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionsByCategory = {
    medical: ['Veterinarian', 'Physician', 'Psychiatrist', 'Dentist'],
    beauty: ['Beautician', 'Nail Technician', 'Beauty Therapist', 'Hairstylist', 'Makeup Artist'],
    maintenance: ['Electrician', 'Plumber' ,'Network Technician', 'AC Technician'],
  };

  return (
    <div>
      
      {formType === 'signup' && (
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required />
          <input type="date" name="dateOfBirth" placeholder="Date of Birth" onChange={handleInputChange} required />
          <select name="gender" onChange={handleInputChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <select name="role" onChange={handleInputChange} required>
            <option value="client">Client</option>
            <option value="professional">Professional</option>
          </select>
        
         
            {formData.role === 'professional' && (
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="category">Select Category</option>
        <option value="medical">Medical</option>
        <option value="beauty">Beauty</option>
        <option value="maintenance">Maintenance</option>
      </select>
            )}
      {selectedCategory && (
       
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="profession">Select Profession</option>
            {optionsByCategory[selectedCategory].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
      )}


          <button type="submit">Sign Up</button>
          <button onClick={toggleFormType}>
         {formType === 'signup' ? 'Login' : 'Signup'}
      </button>
        </form>
      )}
      {formType === 'login' && (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <button type="submit">Login</button>
          <button onClick={toggleFormType}>
          {formType === 'signup' ? 'Login' : 'Signup'}
      </button>
        </form>
      )}
    </div>
  );
};

export default AccountForm;
