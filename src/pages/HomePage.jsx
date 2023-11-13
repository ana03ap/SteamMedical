import React from 'react'
import '../styles/HomePage.css'
import med1 from "../assets/med1.png" 

const HomePage = () => {
  return (
    <>
     
    <div id="primero-arriba">
      <div id="fecha">17 de Octubre</div>
      <div id="info-homep">Steam Medical es una plataforma integral diseñada para simplificar y mejorar la gestión de citas médicas. </div>
    </div>
    
    
    <div id="confondo">
    <img id = "img"src= {med1} alt="" />
      <div id="docInfo">
            <div id="drName">Dr. Maria Martinez</div>
            <div id="drEspecialidad">Radiologa</div>
      </div>

      <div id="btn">
        <div id="flecha">{'>'}</div>
        <p id="txt-btn">Agendar cita</p>
      </div>
     
    </div>
    </>
  )
}

export default HomePage