import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CalendarService {

    constructor() { }


    getEventos() {
        const url = `${API_URL}/api/eventos/`;
        return axios.get(url).then(response => response.data);
    }
    getEventos2() {
        const url = `${API_URL}/api/eventos`;
        return axios.get(url).then(response => response.data);
    }
    getClientesByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCliente(id) {
        const url = `${API_URL}/api/clientes/${id}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCliente(cliente) {
        const url = `${API_URL}/api/clientes/${cliente.id}`;
        return axios.delete(url);
    }
    createCliente(cliente) {
        const url = `${API_URL}/api/clientes/`;
        return axios.post(url, cliente);
    }
    updateCliente(cliente, id) {
        const url = `${API_URL}/api/clientes/${id}`;
        return axios.patch(url, cliente);
    }
}
