import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Signup from './components/signup.js'
import Login from './components/login.js'
import Home from './components/home.js'
import Addstudent from './components/addstudent.js';
import {BrowserRouter,Routes,Route,Link,useNavigate} from 'react-router-dom';

function App() {

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