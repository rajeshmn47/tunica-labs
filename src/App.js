import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Signup from './signup.js'
import Login from './login.js'
import Home from './home.js'
import Addstudent from './addstudent.js';
import {BrowserRouter,Routes,Route,Link,useNavigate} from 'react-router-dom';

function App() {
  const [data,setData]=useState()
  async function fetchdata(){
    const data=await axios.get('http://localhost:8000')
    console.log(data.data.data)
    setData(data.data.data)
    }
  useEffect(()=>{
fetchdata()
  },[])
  return (
  <>
  <div>
  <BrowserRouter>

<Routes>

  <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/addstudent' element={<Addstudent/>}/>
</Routes>
</BrowserRouter>
</div>
  </>
  );
}

export default App;