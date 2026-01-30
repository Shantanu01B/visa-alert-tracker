import axios from "axios";

const API =
    import.meta.env.VITE_API_URL;

// Accept query params for filters & pagination later
export const getAlerts = (params = {}) =>
    axios.get(API, { params });

export const createAlert = (data) => axios.post(API, data);
export const updateAlert = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteAlert = (id) => axios.delete(`${API}/${id}`);