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
import Pagination from '@mui/material/Pagination';
import Edit from './edit.js'
 

function Home({values,setValues,students,setStudents}) {
const[route,setRoute]=useState()
const initialsearch={name:'',value:''}
const[search,setSearch]=useState(initialsearch)
const[page,setPage]=useState(1)
const[open,setOpen]=useState(false)
const[message,setMessage]=useState()
const[pagecount,setPagecount]=useState(Math.ceil(students.length/8))
const[studentsperpage,setStudentsperpage]=useState()
const[notification,setNotification]=useState(false)
const navigate=useNavigate()

useEffect(()=>{
setRoute('/home')
const students_perpage=students.filter((s,index)=>index>=(page-1)*8&&index<page*8)
setStudentsperpage(students_perpage)
setPagecount(Math.ceil(students.length/8))
console.log(pagecount,'rajuespagecount',students.length/8,students)
},[page,students])

const handleclick=(a)=>{
    setRoute(a)
    navigate(a)
}
const searchstudents=()=>{
var a=search.name
var b=search.value
console.log(search,a,b)
var st;
if(a==='name'){
 var st= students.filter((s)=>s.name.indexOf(b)>-1)
}
if(a==='school'){
        var st= students.filter((s)=>s.school.indexOf(b)>-1)
       }
       if(a==='class'){
        var st= students.filter((s)=>s.class.indexOf(b)>-1)
       }
       if(a==='division'){
        var st= students.filter((s)=>s.division.indexOf(b)>-1)
       }
       if(a==='age'){
        var st= students.filter((s)=>s.age.indexOf(b)>-1)
       }
 console.log(st)
setStudentsperpage([...st])
}
const handlesearchchange=(e)=>{
        var name=e.target.name
        var value=e.target.value
        setSearch({name:name,value:value})
      } 
const handleclickedit=(i)=>{
console.log(i)
    var v=students.find((s)=>(s.id===i))
    setValues(v)
    console.log(values)
    setOpen(true)
}
const handlepagechange=(event,newPage)=>{
console.log(newPage)
setPage(newPage)
}
const handledelete=(i)=>{
    setStudents(students.filter((s)=>!(s.id===i)))

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
<input type='text' className='homeinput' placeholder='Name' name='name' onChange={handlesearchchange}/>
<input type='text' className='homeinput' placeholder='Age' name='age' onChange={handlesearchchange}/>
<input type='text' className='homeinput' placeholder='School' name='school' onChange={handlesearchchange}/>
<input type='text' className='homeinput' placeholder='Class' name='school' onChange={handlesearchchange}/>
<input type='text' className='homeinput' placeholder='Division' name='division' onChange={handlesearchchange}/>
<input type='submit' className='homeinputbtn' onClick={searchstudents} value='Search'/>
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
{studentsperpage?.map((t,index)=><>
        <tr className='tablerows'>
            <td>
        {index+1}
                </td>
                
                <td>
        {t.name}
                </td>
                <td>
        {t.age}
                </td>
                <td>
        {t.school}
                </td>
                <td>
        {t.class}
                </td> 
                <td>
        {t.division}
                </td>          
                <td>
        {t.active&&t.active}
                </td> 
                <td>
        <button className='edit'  onClick={()=>handleclickedit(t.id)}>Edit</button>
              
        <button className='delete'  onClick={()=>handledelete(t.id)}>Delete</button>
                </td>                   
                </tr>    
   
    </>)}
    </tbody>
    </table>
    <div className='pages'>
 
    <Pagination count={pagecount} onChange={handlepagechange} variant="outlined" shape="rounded" />
    </div>
  
</div>
<button className='excelbtn'>Download Excel <FileDownloadIcon/></button>
</div>
</div>
  </div>
  <Edit notification={notification} setNotification={setNotification} values={values} open={open}
   setOpen={setOpen}   setValues={setValues} setStudents={setStudents} 
   students={students} setMessage={setMessage}/>
  </>
  );
}

export default Home;