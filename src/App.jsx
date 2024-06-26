import React from 'react'
import './App.css'

import Home from './Pages/Home'
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';

import {Routes, Route, Navigate} from  "react-router-dom";
// import { FaLaptopCode } from "react-icons/fa";



function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Auth/>}/>
      <Route path={'/register'} element={<Auth register/>}/>
      <Route path={'/dashboard'} element={<Dashboard/>}/>
      <Route path={'/project'} element={<Projects/>}/>
      <Route path={'*'} element={<Navigate to={'/'}/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
