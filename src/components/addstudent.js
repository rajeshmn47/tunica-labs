//import logo from './logo.svg';
import './../App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from './../images/logo192.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useNavigate } from 'react-router-dom';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import {isMatch} from 'date-fns'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close'
import moment from 'moment';

function Addstudent({values,setValues,students,setStudents,initialvalues}) {
const symbols=new Array(16).fill(null)
const table=new Array(9).fill(null)
const[error,setError]=useState({
  isError:false,message:''
})
const[route,setRoute]=useState()
const[notification,setNotification]=useState(false)
const navigate=useNavigate()
useEffect(()=>{
setTimeout(() => {
  setNotification(false)
}, 3000);
},[notification])
useEffect(()=>{
    setRoute('/addstudent')
    },[])

    const handleclick=(a)=>{
        setRoute(a)
        navigate(a)
    }  
const handlechange=(e)=>{
  var name=e.target.name
  var value=e.target.value
  
  setValues({...values,[name]:value,id:Math.random()})
if(name==='age'){
  var match=moment(value, 'MM/DD/YYYY',true).isValid();
console.log('rajesh',match)
if(match){
  setValues({...values,[name]:value,id:Math.random()})
  setError({isError:false,
    message:'Date format should be MM/DD/YYYY'})
}
else{
  setError({isError:true,
    message:'Date format should be MM/DD/YYYY'})
}
}
}

 
const handlesubmit=(e)=>{
  e.preventDefault()
  var k=Object.values(values).filter((x)=>(x===''))
  console.log(k,'kutthe')
if(k.length>0){
setError({isError:true,message:'Fill all fields'})
  }
else{
    setError({isError:false,message:'Fill all fields'}) 
    if(!(error.isError)){
      setStudents([...students,values])
      setNotification(true)
      console.log(values,'active')
      setValues(initialvalues)
      }
  }

}
  return (
  <>
 
  <div className='navbar'>
    STUDENT MANAGEMENT SYSTEM
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
  <form className='addinputs' type='post' onSubmit={handlesubmit}>

<div className='formfield'>
    <h2>Full Name</h2>
<input type='text' name='name' value={values.name} onChange={handlechange} className='addinput' placeholder='Name'/>
</div>
<div className='formfield'>
<h2>Date Of Birth</h2>
<input type='text' name='age' value={values.age} onChange={handlechange} className='addinput' placeholder='MM/DD/YYYY'/>
</div>
<div className='formfield'>
<h2>School</h2>
<input type='text' name='school' value={values.school} onChange={handlechange} className='addinput' placeholder='select'/>
</div>
<div className='formfield'>
<h2>Class</h2>
<input type='text' name='class' value={values.class} onChange={handlechange} className='addinput' placeholder='select'/>
</div>
<div className='formfield'>
<h2>Division</h2>
<input type='text' name='division' value={values.division} onChange={handlechange} className='addinput' placeholder='select'/>
</div>
<div className='formfieldradio'>
<h2>Status</h2>
<div className='radiobtns'>
<input type='radio' name='status' value={true} onChange={handlechange} placeholder='Name'/>
<label>Active</label>
<input type='radio' name='status' value={false} onChange={handlechange} placeholder='Name'/>
<label>Inactive</label>
</div>
</div>
<input type='submit' className='addinputbtn' value='Save'/>
{notification&&<h1 style={{color:'blue',marginLeft:'5vw',fontSize:'14px'}}>Successfully Added</h1>}
{error.isError&&<h1 style={{color:'blue',marginLeft:'5vw',fontSize:'14px'}}>{error.message}</h1>}
</form>
</div>

 
  </div>  </div>
 
  </>
  );
}

export default Addstudent;