import React from 'react'

function MyComponente({rey}){
  return (
    <div>
        <p>El rey {rey.nombre} come {rey.cantidad} vacas al día</p>
        <img src={rey.urlImg} alt="Foto del rey" />
    </div>
    )
}

export default MyComponente;