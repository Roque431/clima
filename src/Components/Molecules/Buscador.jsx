import React, { useEffect, useState } from 'react'
import Boton from '../Atoms/Boton'
import Barra from '../Atoms/Barra'
import { fetchAPI } from '../../assets/JS/waterApp'

export const Buscador = ({ buscador, setBuscador, setBuscar }) => {
  
  return (
    <div className='Barra'>
        <Barra setBuscador = { setBuscador } />
        <Boton buscador = { buscador } setBuscar = { setBuscar } />
    </div>
  )
}
