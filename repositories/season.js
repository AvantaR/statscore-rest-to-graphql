import axios from "../axios.js";

export default {
  index: async (limit, page) => {
    const params = {
      limit: limit,
      page: page
    }
    const result = await axios.get('/seasons', { params: params });

    return result.data.api.data;
  },
  show: async (id) => {
    const result = await axios.get(`/seasons/${id}`);

    return result.data.api.data.competition.season;
  },
};
