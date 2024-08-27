import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './SignIn.css'
import signInimg from '../../images/signin-image.jpg'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  return (
    <div className='SignIn-container'>
     {/* <div className='SignIn-container2'></div> */}
     <div className='form'>
        <form action='' className='form2' onSubmit={submitForm}>
          <h1>Sign In</h1>
          <div className='form1'>
            <label htmlFor='email'>Email</label>
            <span>
              <EmailIcon/>
              <input type='text' name='email' id='email' autoComplete='off' placeholder='Email'
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </span>
          </div>
          <div className='form1'>
            <label htmlFor='password'>Password</label>
            <span >
              <LockIcon/>
              <input type='password' name='password' id='password' autoComplete='off' placeholder='*****'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </span>
          </div>
          <Button type='submit' className='btn'  variant="contained">Sign In</Button>
      </form>
      <div className='form3'>
        <img className='signIn-img' src={signInimg} alt="suraj"></img>
        <div className='SignIn-NavLink-div'>
          <NavLink className='SignIn-NavLink' to="/SignUp">Create an account</NavLink>
          <NavLink className='SignIn-NavLink' to="/"><Button variant="contained">Home</Button></NavLink>
        </div>
      </div>
     </div>
    </div>
  )
}
