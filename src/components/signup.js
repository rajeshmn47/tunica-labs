
import './../App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

function Signup() {
const symbols=new Array(20).fill(null)
  return (
  <>
  <div className='navbar'>
TUNICALABS MEDIA
</div>
<div className='signupcontainer'>
{symbols.map((s)=><>
  <div style={{position:'absolute',top:Math.random()*95+'%',left:Math.random()*100+'%',
  fontSize:'20px',transform:`rotate(${Math.random()*100}deg)`}}>
<ScienceOutlinedIcon style={{color:'#b19090'}}/>
</div>

</>)}
<form className='signupform'>
 
<h1>Sign Up Now</h1>
<input type='text' className='input' placeholder='Your Email'/>
<input type='text' className='input' placeholder='Your Password'/>
<input type='text' className='input' placeholder='Confirm Password'/>
<p>I Agree to the terms of Services</p>
  <input type='submit' className='submitbtn' value='sign up'/>
 
  <p>Already have an Account?Sign In</p>
  </form>
  </div>
  </>
  );
}

export default Signup;