import axios from '../axios.js';

export default {
    index: async(limit) => {
        const result = await axios.get(`/sports`);

        return result.data.api.data.sports.slice(0, limit);
    },
    show: async(id) => {
        const result = await axios.get(`/sports/${id}`);

        return result.data.api.data.sport;
    }
}