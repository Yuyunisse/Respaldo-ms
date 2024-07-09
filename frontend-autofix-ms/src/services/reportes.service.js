import axios from "axios";

const REPORTES_API_URL = "http://localhost:8080/reportes";


function reporteUno(mes,ano) {
  return axios.get(`${REPORTES_API_URL}/reporte1/${mes}/${ano}`);  
}

function reporteDos(mes,ano) {
    return axios.get(`${REPORTES_API_URL}/reporte2/${mes}/${ano}`);
}




export default {reporteUno , reporteDos}