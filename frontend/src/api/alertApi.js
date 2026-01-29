import axios from "axios";

const API = "http://localhost:5000/alerts";

export const getAlerts = () => axios.get(API);
export const createAlert = (data) => axios.post(API, data);
export const updateAlert = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteAlert = (id) => axios.delete(`${API}/${id}`);