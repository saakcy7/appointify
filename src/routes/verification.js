import React, { useState } from "react";
import Swal from "sweetalert2";
import "./LogStyles.css";

const VerifyEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyEmail = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/verifyemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ verificationCode: formData.verificationCode }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Verification successful, now register the user
      const registerResponse = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!registerResponse.ok) {
        const errorMessage = await registerResponse.text();
        throw new Error(errorMessage);
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User registered successfully!",
      });

      // Reset the form after successful registration
      event.target.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error registering user: ${error.message}`,
      });
    }
  };

  return (
    <div className="verify-email-container">
      <h1>Verify Email</h1>
      <form onSubmit={handleVerifyEmail}>
        <p>Your code for verification has been sent to {formData.email}</p>
        <input type="text" name="verificationCode" placeholder="Verification Code" onChange={handleInputChange} required />
        <button type="submit">Verify Email</button>
      </form>
    </div>
  );
};

export default VerifyEmail;
