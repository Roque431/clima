import React, { useState, useEffect } from 'react';
import Estilos from "../../assets/Styles/Styles.css"
import { Buscador } from './Buscador';
import { fetchAPI } from '../../assets/JS/waterApp';




function Targeta() {

  const [ data, setData ] = useState({})

  useEffect( ( ) =>{
    const consumoAPI = async() =>{
      try{
        const API = await fetchAPI()
        setData(API)
      }catch( err ){
        console.error('Error en el consumo', err);
      }
    }
      consumoAPI()
  },[])

  return (
    <div className="Contenedor">
      <div className="Barra">
       <Buscador/>
      </div>
      <div className='Contenedor-Imagen'>
        <img className='Imagen-Contenedor' src={ data.icon } alt="" />

        <h1>{ data.name }</h1>
        <h2> Hora Local: <span> { data.localTime } </span> </h2>
        <p> Temperatura en grados celcius: {data.temp_c}</p>
        <p>Temperatura en grados faregeint: {data.temp_f}</p>
        <p>Velocidad del viento: {data.wind_mph} mph</p>
        <p>Velocidad del viento: {data.wind_kph} kph</p>
        <p>Humedad: {data.humidity}</p>
      </div>
    </div>
  );
}

export default Targeta;

