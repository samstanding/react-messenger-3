import axios from 'axios';
import CONSTANTS from '../../constants/index';

export function callMessage (payload) {
    const body = ({
        name: payload.name,
        message: payload.message
    });

    return axios.post(`${CONSTANTS.apiBaseUrl}/message`, body)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
}

export function getMessages () {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };

    return axios.get(`${CONSTANTS.apiBaseUrl}/message`, config) 
        .then(response => response.data)
        .catch((error) => {throw error; });
}

