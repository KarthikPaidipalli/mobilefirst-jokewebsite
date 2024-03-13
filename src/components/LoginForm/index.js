import React, { useState } from 'react';
import './index.css';
import Form from 'react-bootstrap/Form';
const LoginForm = props => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let error = "";
  
    if (email.length === 0) {
      alert("Username is required")
    } else if (password.length === 0) {
      alert("Password is required");
    } else if (email !== "karthik" || password !== "karthik123") {
      error = "Incorrect username or password";
    } else {
      const { history } = props;
      history.replace("/home");
    }
  
    setErrors(error);
  };

  return (
    <div className='container'>
      <div className="login-container">
        <h2 className='heading-login'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='inputelements'
            />
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
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {errors && <span className="error">{errors}</span>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
