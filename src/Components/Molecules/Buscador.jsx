import React, { useEffect, useState } from 'react'
import Boton from '../Atoms/Boton'
import Barra from '../Atoms/Barra'

export const Buscador = () => {

    const [buscador, setBuscador] = useState()

    useEffect(() => {
        console.log('Buscador ',buscador);
    },[buscador])

  return (
    <div className='Barra'>
        <Barra setBuscador = { setBuscador } />
        <Boton buscador = { buscador }/>
    </div>
  )
}
