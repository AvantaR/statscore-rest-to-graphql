import axios from 'axios';

const config = {
    baseURL: process.env.API_URL,
    headers: {
        common: { 'Authorization': `bearer ${process.env.API_TOKEN}` }
    }
}

export default axios.create(config);