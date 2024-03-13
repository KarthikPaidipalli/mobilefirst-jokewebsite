
import React, { useState } from 'react';
import './index.css';

const LoginForm = props => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ emailerror: "", passworderror: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const errors = {};
    if (email.length === 0) {
      setErrors(errors.emailerror = "Email is required")
    } else if (password.length === 0) {
      setErrors(errors.passworderror = "Password is required")
    } else {
      if (email === "karthik" && password === "karthik123") {
        const {history}=props
        history.replace("/");
      }
      else{
        setErrors(errors.emailerror = "Email is required")
        setErrors(errors.passworderror = "Password is required")
      }
    }
  };

  return (
    <div className='container'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='inputelements'
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='inputelements'
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
