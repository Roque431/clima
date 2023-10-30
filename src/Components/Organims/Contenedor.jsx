import Imagenes from "../../assets/JS/Data-Base";
import Targeta from "../Molecules/Targeta";

function Contenedor() {
  return (
    <>
      <div className="Contenedor-Navegacion">
        <img className="Imagen-Icono" src={Imagenes.Data.IconoInicial} />
        <h1 className="Texto-Nav"> {Imagenes.Data.Texto} </h1>
        
        
        <div>

        </div>
      </div>

      <Targeta />
    </>
  );
}

export default Contenedor;
