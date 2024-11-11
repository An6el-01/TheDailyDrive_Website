import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

//Register User
export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

//Login User
export const loginUser = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};

//logout User
export const logoutUser = async (token) => {
    return await axios.post(`${API_URL}/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
};