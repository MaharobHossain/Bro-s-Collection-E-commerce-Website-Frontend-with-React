import React from 'react'
import './CSS/Login.css'



const Login = () => {
  return (
    <div>
         <div className='loginsingups clearfix'>
      <div className="login-containers">
        <h1>Log-in  Account</h1>
        <div className="login-fieldss">
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>

        

        <div className="login-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of use & privacy policy.</p> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;
