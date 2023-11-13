import React from 'react'
import '../styles/cardcitas.css'
const cardcitas = ({url,name,especialidad,descripcion}) => {
  return (
    <div classname='card-doc'>
      <img src={url} alt="" />
      <h2>{name}</h2>
      <span>{especialidad}</span>
      <p>{descripcion}</p>
    </div>
  )
}

export default cardcitas