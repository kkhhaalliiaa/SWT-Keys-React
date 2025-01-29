import React, { useState } from "react";
import './contact.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be at least 10 digits.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Form Submitted Successfully:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <h3>Thanks for visiting Swtkeys! Whether you're an expert or new to keyboard customization, we're here to help. If you have questions about our products or need assistance, don't hesitate to reach out.</h3>
      {isSubmitted && <p className="success-message">Form submitted successfully!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <small className="error-message">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <small className="error-message">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <small className="error-message">{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && <small className="error-message">{errors.message}</small>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
