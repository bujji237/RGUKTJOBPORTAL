import React, { useState } from 'react';
import { useNavigate ,Link} from "react-router-dom";
import './Login.css';
import image1 from "../../asserts/rgukt2.jpeg";

function Login (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onEmailBlured = (event) => {
      setEmail(event.target.value);
  }


  const onPasswordBlur = (event) => {
      setPassword(event.target.value);
  }



  const onloginFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userLoginData = { email, password };
      const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userLoginData),
      });

      const data = await response.json();

      if (response.ok) {
          navigate("/student");
      } else {
          alert(data.message || "Login failed! Please check your credentials.");
      }
    } 
    catch (error) {
      alert( "Login failed! Please check your credentials.");
    } 
    finally {
      setLoading(false);
    }
  };




  return (
      <div className="loginform-container">
          <img className="login-image-container" alt="login-image" src={image1} />
          <form onSubmit={(event) => onloginFormSubmit(event)} className="login-container">
              <h1 className="login-heading">Login</h1>
              <div className="login-input-field-container">
                  <label className="login-label-field" htmlFor="login-mail-field">College Mail Id: </label>
                  <input onBlur = {(event) => onEmailBlured(event)} type="email" className="login-input-field" id="login-mail-field" required/>
              </div><br/>
              <div className="login-input-field-container">
                  <label className="login-label-field" htmlFor="login-password-field">Password: </label>
                  <input onBlur = {(event) => onPasswordBlur(event)} type="password" className="login-input-field" id="login-password-field" required/>
              </div><br/>
              <button type = "submit" className="signup-btn" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
              <p className='new-signin-text'>New? Signin <Link to = "/Signup">here</Link></p>
          </form>
      </div>
  )
}

export default Login;


