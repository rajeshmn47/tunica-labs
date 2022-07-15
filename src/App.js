import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Signup from './components/signup.js'
import Login from './components/login.js'
import Home from './components/home.js'
import Addstudent from './components/addstudent.js';
import {BrowserRouter,Routes,Route,Link,useNavigate} from 'react-router-dom';

function App() {
const[students,setStudents]=useState([])
const[ok,setOk]=useState(false)
const initialvalues={
  id:'',
  name:'',
  age:'',
  school:'',
  class:'',
  division:'',
  status:'true'
}
const[values,setValues]=useState(initialvalues)
useEffect(()=>{
  const student=localStorage.getItem("students")
  ? JSON.parse(localStorage.getItem("students")):false
  if(student){
  setStudents(student)
  }
  setOk(true)
},[])
useEffect(()=>{
  console.log('editing')
if(ok){
  console.log(students)
  localStorage.setItem("students", JSON.stringify(students))
}
},[students])
  return (
  <>
  <div>
  <BrowserRouter>

<Routes>

  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/' element={<Home values={values} setValues={setValues} students={students} 
  setStudents={setStudents}/>}/>
  <Route path='/addstudent' element={<Addstudent values={values} setValues={setValues} 
  students={students} initialvalues={initialvalues}  setStudents={setStudents}/>}/>
</Routes>
</BrowserRouter>
</div>
  </>
  );
}

export default App;