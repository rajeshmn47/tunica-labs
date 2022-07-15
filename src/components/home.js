//import logo from './logo.svg';
import './../App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Edit from './edit.js'
import logo from './../images/logo192.png'
import { ExportToCsv } from 'export-to-csv';
 

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
let settings = {
        fileName: "MySpreadsheet", // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
      }
useEffect(()=>{
setRoute('/home')
const students_perpage=students.filter((s,index)=>index>=(page-1)*8&&index<page*8)
setStudentsperpage(students_perpage)
setPagecount(Math.ceil(students.length/8))
},[page,students])
useEffect(()=>{
        setTimeout(() => {
          setMessage(null)
        }, 3000);
        },[message])
const handleclick=(a)=>{
    setRoute(a)
    navigate(a)
}
const searchstudents=()=>{
var a=search.name
var b=search.value
var st;
if(a==='name'){
 var st= students.filter((s)=>s.name.toUpperCase().indexOf(b.toUpperCase())>-1)
}
if(a==='school'){
        var st= students.filter((s)=>s.school.toUpperCase().indexOf(b.toUpperCase())>-1)
       }
if(a==='class'){
        var st= students.filter((s)=>s.class.toUpperCase().indexOf(b.toUpperCase())>-1)
       }
if(a==='division'){
        var st= students.filter((s)=>s.division.toUpperCase().indexOf(b.toUpperCase())>-1)
       }
if(a==='age'){
        var st= students.filter((s)=>s.age.toUpperCase().indexOf(b.toUpperCase())>-1)
       }
 console.log(search)
if(search.value.length>0){
setStudentsperpage([...st])
}
else{
const students_perpage=students.filter((s,index)=>index>=(page-1)*8&&index<page*8)  
setStudentsperpage([...students_perpage])    
}
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
    setMessage('Successfully edited')
}
const handlepagechange=(event,newPage)=>{
console.log(newPage)
setPage(newPage)
}
const handledelete=(i)=>{
    setStudents(students.filter((s)=>!(s.id===i)))
setMessage('Successfully deleted')
}
const generateexcel=()=>{
        console.log('ok',students)
        const options = { 
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalSeparator: '.',
                showLabels: true, 
                showTitle: true,
                title: 'My Awesome CSV',
                useTextFile: false,
                useBom: true,
                useKeysAsHeaders: true,
                // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
              };            
        const csvExporter = new ExportToCsv(options);
 
        csvExporter.generateCsv(students);    
}
const getage=(a)=>{
let age =new Date().getFullYear()-new Date(a).getFullYear()
return age;
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
<div className='maintwo_notify'>
   <h5 style={{color:'red',fontSize:'16px'}}>View Student</h5>
   {message&&<h1 style={{color:'red',marginLeft:'5vw',fontSize:'14px'}}>{message}</h1>}
   </div>
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
        {getage(t.age)}
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
        {t.active?'Inctive':'active'}
                </td> 
                <td>
        <button className='edit'  onClick={()=>handleclickedit(t.id)}>Edit</button>
              
        <button className='delete'  onClick={()=>handledelete(t.id)}>Delete</button>
                </td>                   
                </tr>    
   
    </>)}
    </tbody>
    </table>
    <table id='tabletwos'>
        <tr id='table_head'>
 
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
 
    </tr>
    <tr>
    <th>
    
    </th> 
        </tr>  
<tbody>
{studentsperpage?.map((t,index)=><>
        <tr className='tablerows'>
         
                <td>
        {t.name}
                </td>
                <td>
        {getage(t.age)}
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
              
                <td className='lastcolumn'>
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
<button className='excelbtn' onClick={generateexcel}>Download Excel <FileDownloadIcon/></button>


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