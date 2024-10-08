import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
 // Ensure you import the CSS file

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Implement registration logic here (API call)
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label className="input-label">Name</label>
          <input
            className="input-field"
            type="text"
            {...register('name', { required: true })}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Email</label>
          <input
            className="input-field"
            type="email"
            {...register('email', { required: true })}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            type="password"
            {...register('password', { required: true })}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Role</label>
          <select className="input-select" {...register('role', { required: true })}>
            <option value="admin">Admin</option>
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>
        <button className="submit-button" type="submit">Register</button>
      </form>
      <p className="login-prompt">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
