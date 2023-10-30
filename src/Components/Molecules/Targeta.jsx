import React, { useState, useEffect } from "react";
import "../../assets/Styles/Styles.css";
import { Buscador } from "./Buscador";
import { fetchAPI } from "../../assets/JS/waterApp";
import Imagenes from "../../assets/JS/Data-Base";

function Targeta() {
  const [data, setData] = useState(null);
  const [buscador, setBuscador] = useState('');
  const [buscar, setBuscar] = useState(false);

  useEffect(() => {
    const consumoAPI = async () => {
      try {
        const API = await fetchAPI(buscador);
        setData(API);
        setBuscar(false)
      } catch (err) {
        console.error("Error en el consumo", err);
      }
    };
    consumoAPI();
  }, [buscar]);
 
  return (
    <div className="Contenedor-Busqueda">
      <div className="Barra">
        <Buscador
          buscador={buscador}
          setBuscador={setBuscador}
          setBuscar={setBuscar}
        />
      </div>
      {data ? (
        <div className="Contenedor-Imagen">
          <img className="Imagen-Tiempo" src={data.icon} />

          <p className="Grados-C">{data.temp_c}ºC</p>

          <h1 className="Hora">{data.localTime}</h1>

          <h1 className="Nombre">{data.name}</h1>
          <img className="Calendario" src={Imagenes.Data.ImagenCalendario} />
          <p className="Grados-F">{data.temp_f}ºF</p>
          <img
            className="Imagen-Grados-F"
            src={Imagenes.Data.ImagenTemperatura}
          />
          <p className="Aire-Hora">{data.wind_mph} M/H</p>
          <img
            className="Imagen-Aire-Hora"
            src={Imagenes.Data.ImagenTemperaturaH}
          />
          <p className="Aire-Kilometro">{data.wind_kph} K/H</p>
          <img
            className="Imagen-Aire-Kilometro"
            src={Imagenes.Data.ImagenTemperaturaK}
          />
          <p className="Humedad">{data.humidity} Hr</p>
          <img className="Imagen-Humedad" src={Imagenes.Data.ImagenHumedad} />
        </div>
      ) : (
        <p>Error network</p>
      )}
    </div>
  );
}

export default Targeta;
