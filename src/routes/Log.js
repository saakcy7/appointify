import React, { useState } from "react";
import "./LogStyles.css";
const AccountForm = () => {
  const [formType, setFormType] = useState("signup"); // 'signup' or 'login'
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    DOB: "",
    gender: "",
    role: "client", // default to 'client'
    //profession: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        ...formData,
        DOB: new Date(formData.DOB),
      };
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  const toggleFormType = () => {
    setFormType(formType === "signup" ? "login" : "signup");
  };

  return (
    <div>
      {formType === "signup" && (
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <input type="text" name="fullName" placeholder="Name" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required />
          <input type="date" name="DOB" placeholder="Date of Birth" onChange={handleInputChange} required />
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
          {formData.role === "professional" && (
            <select name="profession" onChange={handleInputChange} required>
              <option value="">Select Profession</option>
              <option value="medical">Medical</option>
              <option value="salon">Salon</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
            </select>
          )}
          <button type="submit">Sign Up</button>
          <button onClick={toggleFormType}>{formType === "signup" ? "Login" : "Signup"}</button>
        </form>
      )}
      {formType === "login" && (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <button type="submit">Login</button>
          <button onClick={toggleFormType}>{formType === "signup" ? "Login" : "Signup"}</button>
        </form>
      )}
    </div>
  );
};

export default AccountForm;
