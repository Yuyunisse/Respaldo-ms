import axios from "axios";

const VEHICULO_API_URL = "http://localhost:8080/vehiculo";


function registrarVehiculo(vehiculo) {
  return axios.post(`${VEHICULO_API_URL}/registro`,vehiculo);  
}

function todosLosVehiculos() {
  return axios.get(`${VEHICULO_API_URL}/todo`)
}

function datosVehiculo(patente) {  
  return axios.get(`${VEHICULO_API_URL}/${patente}`)
}


export default {registrarVehiculo, todosLosVehiculos , datosVehiculo}