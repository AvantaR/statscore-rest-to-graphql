import axios from "../axios.js";

export default {
  index: async (limit, page) => {
    const params = {
      limit: limit,
      page: page
    }
    const result = await axios.get('/competitions', { params: params });

    return result.data.api.data.competitions;
  },
  show: async (id) => {
    const result = await axios.get(`/competitions/${id}`);

    return result.data.api.data.competition;
  },
};
