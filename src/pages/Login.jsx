import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/login.css'
import medLogin from "../assets/medLogin.png" 
const Login = ({ setShowNav }) => {
  const [name, setName] = useState('')
  const location = useLocation();
  if (location.pathname == "/Login") {
    setShowNav(false);// si elocation es login que no aparezca el login
  }

  return (
  <section className="login">
    <div className="form">
    <p className='txt' id='titulo'>STEAM MEDICAL</p>
    <p className='txt subtitle' >Welcome back! Please enter your details.</p>
        <form action="">
          <div id="email-box">
            <p className='txt ' >Email</p>
            <input type="email" name="" id="" placeholder='Enter your email'/>
          </div>
        
          <div id="pw-box">
            <p className='txt '>Password</p>
            <input type="password" name="" id="pw" placeholder='**********'/>
          </div>

        
        </form>

        <div id="checkbox">
            <div id="remember">
              <input type="checkbox" name="" id="checkbox" />
              <p className='txt '>Remember me</p>
            </div>

            <div id="forget">
            <input type="checkbox" name="" id="" />
            <p className='txt '>Forget password</p>
            </div>


        </div>
        

        <button className='txt'id='signin' >Sign in</button>
        <button className='txt' id='signggl'>Sign in with google</button>
        <p className='txt subtitle' >Don’t have an account? <span> Sign up fo free!</span></p>
     </div>

     <div className="photo">
       <img src={medLogin} alt="" id='medLogin' />
     </div>
   </section>
  )
}

export default Login