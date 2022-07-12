
import './../App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import {useNavigate} from 'react-router-dom'

function Login() {
const symbols=new Array(16).fill(null)
const navigate=useNavigate()
  return (
  <>
  <div className='navbar'>
TUNICALABS MEDIA
</div>
<div className='signupcontainer'>
{symbols.map((s)=><>
  <div style={{position:'absolute',top:Math.random()*95+'%',left:Math.random()*100+'%',fontSize:'20px'}}>
<ScienceOutlinedIcon style={{color:'#b19090'}}/>
</div>

</>)}
<form className='signupform'>
 
<h1>Login In Now</h1>
<input type='text' className='input' placeholder='Your Email'/>
<input type='text' className='input' placeholder='Your Password'/>
<p>I Agree to the terms of Services</p>
  <input type='submit' className='submitbtn' onClick={()=>navigate('/home')} value='login'/>
 
  <p>Dont have an Account?Sign Up</p>
  </form>
  </div>
  </>
  );
}

export default Login;