
import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import Main from "../pages/MainPage"
import Citas from "../pages/Citas"
import CitasList from "../pages/CitasList"
import PagarCitas from "../pages/PagarCitas"
import Nav from './Nav'

const Layout = () => {
  const [showNav, setShowNav] = useState(true);// el estado para setear o no el nav cuando aparezca el login

  return (
   <>

    {
        showNav && <Nav/>
      }
  
   <BrowserRouter>
    <Routes>
      <Route path ='/' element={<HomePage/>}/>
      <Route path="/Login" element={<Login setShowNav={setShowNav}/>} />
      <Route path ='/Main' element={<Main/>}/>
      <Route path ='/Citas' element={<Citas/>}/>
      <Route path ='/CitasList' element={<CitasList/>}/>
      <Route path ='/PagarCitas' element={<PagarCitas/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default Layout
