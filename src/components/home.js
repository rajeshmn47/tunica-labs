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

function Home() {
const[route,setRoute]=useState()
const navigate=useNavigate()
const symbols=new Array(16).fill(null)
const table=new Array(9).fill(null)
useEffect(()=>{
setRoute('/home')
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
   <h5 style={{color:'red',fontSize:'16px'}}>View Student</h5>
<div className='homeinputs'>
<input type='text' className='homeinput' placeholder='Name'/>
<input type='text' className='homeinput' placeholder='Name'/>
<input type='text' className='homeinput' placeholder='Name'/>
<input type='text' className='homeinput' placeholder='Name'/>
<input type='text' className='homeinput' placeholder='Name'/>
<input type='submit' className='homeinputbtn' value='Search'/>
</div>
<div>
    <table id='table'>
        <tr id='table_head'>
 <th>
    ID'V
    </th> 
    <th>
Name
    </th> 
    <th>
    Age
    </th> 
    <th>
    School
    </th> 
    <th>
Class
    </th> 
    <th>
    Division
    </th> 
    <th>
    Status
    </th> 
    <th>
    Status
    </th> 
    </tr>
    <tr>
    <th>
    
    </th> 
        </tr>  
<tbody>
{table.map((t,index)=><>
        <tr className='tablerows'>
            <td>
        {index+1}
                </td>
                
                <td>
        Student Name
                </td>
                <td>
        10
                </td>
                <td>
        Model School
                </td>
                <td>
        3
                </td> 
                <td>
        A
                </td>          
                <td>
        Active
                </td> 
                <td>
        <a>Edit</a>
              
        <a>Delete</a>
                </td>                   
                </tr>    
   
    </>)}
    </tbody>
    </table>
    <div className='pages'>
    <ArrowBackIosIcon style={{fontSize:'12px'}}/>
    <div className='num'>
        1
    </div>
    <div className='num'>
        2
    </div>
    <div className='num'>
        3
    </div>
    <ArrowForwardIosIcon style={{fontSize:'12px'}}/>
    </div>
  
</div>
<button className='excelbtn'>Download Excel <FileDownloadIcon/></button>
</div>
</div>
  </div>

  </>
  );
}

export default Home;