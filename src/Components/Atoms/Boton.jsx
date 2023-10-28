import Imagenes from "../../assets/JS/Data-Base";
import { fetchAPI } from "../../assets/JS/waterApp";

function Boton ({ buscador }) {

    const onSerch = () =>{
        console.log("sdadasd", buscador);
        if (buscador === '') {
            return <p>Error</p>
        }
        fetchAPI(buscador)
    }

    return (
    <> 
        <button 
            className="Busqueda"
            onClick = { onSerch }
        >
            <img className="Imagen-Boton"  src={Imagenes.Data.imagen} />
        </button>
    
    </> 
     );
}

export default Boton ;