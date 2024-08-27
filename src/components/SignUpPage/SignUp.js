import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import '../SignUpPage/SignUp.css'
import signUpimg from '../../images/signup-image.jpg'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name, email, password };
    console.log(newEntry);
  }
  return (
    <div className='SignUp-container'>
      <div className='form form-signUp'>
        <div className='form3'>
          <img className='signUp-img' src={signUpimg} alt="suraj"></img>
          <div className='SignUp-NavLink-div'>
            <NavLink className='SignUp-NavLink' to="/SignIn">Already have an account</NavLink>
            <NavLink className='SignUp-NavLink' to="/"><Button variant="contained">Home</Button></NavLink>
          </div> 
        </div>
        <form action='' className='form2' onSubmit={submitForm}>
          <h1>Sign Up</h1>
          <div className='form1'>
            <label htmlFor='name'>Name</label>
            <span>
              <PersonIcon/>
              <input type='text' name='name' id='name' autoComplete='off' placeholder='Name'
                value={name} onChange={(e) => setName(e.target.value)} />
            </span>
          </div>
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
            <Button type='submit' className='btn'  variant="contained">Sign Up</Button>
      </form>
     </div>
    </div>
  )
}
