import React, { useState } from "react";
import './signin.css'
import '../../apiHelper/api'
import api from "../../apiHelper/api";

const Signin: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const signIn = async () => {
    const user = await api.Signin(email, password)
    console.log(user)
  }
  return (
    <div>
      <div className='signin'>
        <input
          className='signin signin-email'
          type='text' placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          className='signin signin-password'
          type='password' placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='signin signin-button-link'>
        <a className=' link-signin' href='http://google.com' target='wwww.google.com' >Forgot password?</a>
        <button className=' button-signin' onClick={signIn}>Sign in</button>
      </div>
    </div>
  );
};
export default Signin;
