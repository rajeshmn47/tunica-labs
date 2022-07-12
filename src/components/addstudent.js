//import logo from './logo.svg';
import './../App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from './../logo192.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useNavigate } from 'react-router-dom';

function Addstudent() {
const symbols=new Array(16).fill(null)
const table=new Array(9).fill(null)
const[route,setRoute]=useState()
const navigate=useNavigate()
useEffect(()=>{
    setRoute('/addstudent')
    },[])
    const handleclick=(a)=>{
        setRoute(a)
        navigate(a)
    }   
  return (
  <>
  <div className='navbar'>
    TUNICALABS MEDIA
    <div className='navbar_right'>
    <Badge badgeContent={4} color="error">
    <NotificationsIcon/>
    </Badge>
    <img src={logo} alt='' className='imagesmall' width='40'/>
    <p>Rajan <KeyboardArrowDownIcon/></p>
    </div>
  </div>
  <div className='home'>
  <div className='main'>
<div className='mainone'>
<h1>Student <KeyboardArrowDownIcon/></h1>
<h2 onClick={()=>handleclick('/home')} className={route==='/home'?'homeroute':null}><AccessibilityIcon/>View Student</h2>
<h2 onClick={()=>handleclick('/addstudent')} className={route==='/addstudent'?'addroute':null}><PersonAddAlt1Icon/>Add Student</h2>
<h3></h3>
</div>
<div className='maintwo'>
   <h5 style={{color:'red',fontSize:'16px'}}>Add Student</h5>
<div className='addinputs'>
<div className='formfield'>
    <h2>Full Name</h2>
<input type='text' className='addinput' placeholder='Name'/>
</div>
<div className='formfield'>
<h2>Date Of Birth</h2>
<input type='text' className='addinput' placeholder='DD/MM/YYYY'/>
</div>
<div className='formfield'>
<h2>School</h2>
<input type='text' className='addinput' placeholder='select'/>
</div>
<div className='formfield'>
<h2>Class</h2>
<input type='text' className='addinput' placeholder='select'/>
</div>
<div className='formfield'>
<h2>Division</h2>
<input type='text' className='addinput' placeholder='select'/>
</div>
<div className='formfieldradio'>
<h2>status</h2>
<div className='radiobtns'>
<input type='radio'  placeholder='Name'/>
<label>Active</label>
<input type='radio'  placeholder='Name'/>
<label>Invoice</label>
</div>
</div>
</div>
  </div>
  <input type='submit' className='addinputbtn' value='Save'/>
  </div>  </div>
  </>
  );
}

export default Addstudent;