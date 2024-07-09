import axios from "axios";

const REPARACION_API_URL = "http://localhost:8080/reparaciones";


function registrarReparacion(reparacion) {
  return axios.post(`${REPARACION_API_URL}/registro`,reparacion);  
}

function listarReparaciones(listar) {
    return axios.get(`${REPARACION_API_URL}/listar`);
}




export default {registrarReparacion , listarReparaciones}