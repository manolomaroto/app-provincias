import axios from 'axios'

const API_URL = '/api/provincias';

export const getProvincias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching provincias:', error);
    throw error;
  }
};

export const getProvinciaById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching provincia with id ${id}:`, error);
    throw error;
  }
};