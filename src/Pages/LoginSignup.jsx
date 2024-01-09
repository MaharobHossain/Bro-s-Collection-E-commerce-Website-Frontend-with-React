import React from 'react'
import './CSS/LoginSignup.css'





const LoginSignup = () => {
  return (
    <div className='loginsingup'>
      <div className="login-container">
        <h1>Sing Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>

        <p className="login-login">
          Already havean account? <span>Login here</span>
        </p>

        <div className="login-agree">
        <input type="cheakbox" name='' id='' />
        <p>By continuing, I agree to the terms of use & privacy policy.</p> 
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;

