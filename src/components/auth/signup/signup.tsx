import React, { useState } from "react";
import api from "../../apiHelper/api";

const Signup: React.FC<any> = (props) => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const signUp = async () => {
    const data = await api.Signup(email, password)
   console.log('work')
  }
  return (
    <div>
      <div className='signin'>
        <input
          className='signin signin-email'
          type='email' placeholder='email'
          onChange={(e) => setEmail(e.target.value)} />
        <input
          className='signin signin-password'
          type='password' placeholder='password'
          onChange={(e) => setPassword(e.target.value)} />
           <input
          className='signin signin-firstName'
          type='text' placeholder='First name'
          onChange={(e) => setPassword(e.target.value)} />
            <input
          className='signin signin-lastName'
          type='text' placeholder='Last name'
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='signin signin-button-link'>
        <button className=' button-signin' onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
};
export default Signup;
