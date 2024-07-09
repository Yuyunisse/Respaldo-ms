import axios from "axios";

const HISTORIAL_API_URL = "http://localhost:8080/historial";


function registrarDetalle(detalle) {
  return axios.post(`${HISTORIAL_API_URL}/detalle/registrar`,detalle);  
}

function listarTodos(listar) {
    return axios.get(`${HISTORIAL_API_URL}/detalle/todo`);
}

function listarDetallePatente(patente, fecha) {
    return axios.get(`${HISTORIAL_API_URL}/detalle/lista/${patente}/${fecha}`);
}

function historiaCuatro() {
  return axios.get(`${HISTORIAL_API_URL}/vehiculoxhistorial`);
}

function registrarConvenio(convenio){
  return axios.post(`${HISTORIAL_API_URL}/convenio/registrar`,convenio);
}

function listarConvenio(mes, anio){
  return axios.get(`${HISTORIAL_API_URL}/convenio/${mes}/${anio}`);
}

function registrarHitorial(patente){
  return axios.post(`${HISTORIAL_API_URL}/registrar`,patente);
}

const mostrarBoleta = async (patente, fechaI) => {
  try {
    const response = await axios.get(`${HISTORIAL_API_URL}/boleta/ver/${patente}/${fechaI}`);
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud HTTP:', error);
    throw error;
  }
};


function actualizarMontos(patente,ingreso){
  return axios.put(`${HISTORIAL_API_URL}/boleta/actualizarMonto`, null, {
    params: {
      patente: patente,
      ingreso: ingreso
    }
  });
}

function aplicarConvenio(patente,ingreso){
  return axios.put(`${HISTORIAL_API_URL}/convenio/aplicar`, null, {
    params: {
      patente: patente,
      ingreso: ingreso
    }
  });
}

function actualizarDes(patente, ingreso) {
  return axios.put(`${HISTORIAL_API_URL}/boleta/actualizarDespacho`, null, {
    params: {
      patente: patente,
      ingreso: ingreso
    }
  });
}

function actualizarSalida(patente, ingreso, fecha, hora) {
  return axios.put(`${HISTORIAL_API_URL}/boleta/actualizarSalida`, {
    patente: patente,
    ingreso: ingreso,
    fecha: fecha,
    hora: hora
  });
}

const actualizarSalidaApi = {
  actualizarSalida
};





export default {registrarDetalle , listarTodos, listarDetallePatente, historiaCuatro, registrarConvenio, registrarHitorial,listarConvenio,actualizarDes,actualizarMontos,actualizarSalida, mostrarBoleta, actualizarSalidaApi, aplicarConvenio}