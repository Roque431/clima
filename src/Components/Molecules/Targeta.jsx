import React, { useState, useEffect } from 'react';
import  "../../assets/Styles/Styles.css"
import { Buscador } from './Buscador';
import { fetchAPI } from '../../assets/JS/waterApp';




function Targeta() {

  const [ data, setData ] = useState(null)
  const [buscador, setBuscador] = useState()
  const [buscar, setBuscar] = useState(false)

  useEffect( ( ) =>{
    const consumoAPI = async() =>{
      try{
        const API = await fetchAPI(buscador)
        setData(API)
      }catch( err ){
        console.error('Error en el consumo', err);
      }
    }
      consumoAPI()
  },[buscar])

  setTimeout(() => {
    setBuscar(false)
  }, 1000)

  return (
    <div className="Contenedor">
      <div className="Barra">
       <Buscador
        buscador={ buscador }
        setBuscador={ setBuscador }
        setBuscar = { setBuscar }
      />
      </div>
      {
        data ? (
          <div className='Contenedor-Imagen'>
        <img className='Imagen-Contenedor' src={ data.icon } alt="" />

        <h1>{ data.name }</h1>
        <h2> Fecha y hora Local: <span> { data.localTime } </span> </h2>
        <p> Temperatura en grados celcius: {data.temp_c}</p>
        <p>Temperatura en grados faregeint: {data.temp_f}</p>
        <p>Velocidad del viento: {data.wind_mph} mph</p>
        <p>Velocidad del viento: {data.wind_kph} kph</p>
        <p>Humedad: {data.humidity}</p>
      </div>
        ): (
          <p>Ingrese la Locacion</p>
        )
      }
    </div>
  );
}

export default Targeta;

