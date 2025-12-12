import React, { useState } from 'react';
import { register } from '../Auth';
import { useNavigate, Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      setsuccess('Registered Successfully');
      seterror('');
      navigate('/login');
    } 
      catch (err) {
      console.log('Registration Error', err);
      seterror('Registration Failed');
      setsuccess('');
    }
  };

  return (
    <div className="reg">
    <center>
      <div className="register-container">
        <div className="register-card"><br/>
          <h2>Create Account 📝 </h2><br/>
          <h5 className="subtitle">Register a new account</h5><br/>
          <form onSubmit={handleSubmit}>

            <label><b>Username</b></label><br/>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
              required
            />
              <br/><br/>
            <label><b>Password</b></label><br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              
              required
            /><br/><br/>
            {/* <button type="submit">Register</button> */}
             <button type="submit" class="btn btn-secondary">register</button>   
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
          </form>
          <br/>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
<br/>
          {/* <Link to="/" className="home-link">← Back to Home</Link> */}
        </div>
      </div>
      </center>
    </div>
  );
};


export default Register;



