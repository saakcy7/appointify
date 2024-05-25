import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LogStyles.css";
import {Link} from "react-router-dom";
const AccountForm = () => {
  const [formType, setFormType] = useState("signup");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    DOB: "",
    gender: "",
    role: "client",
    profession: "",
    description: "",
    category: "",
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      setMessageType("success");
      setMessage("User registered successfully!");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error registering user: ${error.message}`,
      });
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setMessageType("success");
      setMessage("User logged in successfully!");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error logging in: ${error.message}`,
      });
    }
  };

  const toggleFormType = () => {
    setFormType(formType === "signup" ? "login" : "signup");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleSuccess = (response) => {
    // Implement your Google sign-in success logic here
  };

  // Function to handle failed Google sign-in
  const handleGoogleFailure = (error) => {
    // Implement your Google sign-in failure logic here
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setFormData({ ...formData, category, profession: "", description: "" });
    setSelectedOption("");
  };

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setSelectedOption(value);
    setFormData({ ...formData, [name]: value });
  };

  const optionsByCategory = {
    medical: ["Veterinarian", "Physician", "Psychiatrist", "Dentist"],
    beauty: ["Beautician", "Nail Technician", "Beauty Therapist", "Hairstylist", "Makeup Artist"],
    maintenance: ["Electrician", "Plumber", "Network Technician", "AC Technician"],
  };

  return (
    <div className="signup-page-container">
      <div className="account-form-wrapper">
        <div className="account-form-container">
          {formType === "signup" && (
            <form onSubmit={handleSignupSubmit}>
              <h1>Signup</h1>
              <input type="text" name="fullName" placeholder="Name" onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
              <div className="password-container">
                <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" onChange={handleInputChange} required />
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className="password-icon" />
              </div>
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
                <>
                  <select value={selectedCategory} onChange={handleCategoryChange} required>
                    <option value="">Select Category</option>
                    <option value="medical">Medical</option>
                    <option value="beauty">Beauty</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  {selectedCategory && (
                    <select name="profession" value={selectedOption} onChange={handleOptionChange} required>
                      <option value="">Select Profession</option>
                      {optionsByCategory[selectedCategory].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {selectedCategory && selectedOption && <input type="text" name="description" placeholder="Write a description" onChange={handleInputChange} required />}
                </>
              )}

          <button type="submit">Sign Up</button>
          <button type="button" onClick={toggleFormType}>
            {formType === "signup" ? "Login" : "Signup"}
          </button>
        </form>
      )}
      {formType === "login" && (
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
          <Link to="/cat"><button type="submit">Login</button></Link>
          <button type="button" onClick={toggleFormType}>
            {formType === "signup" ? "Login" : "Signup"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AccountForm;
