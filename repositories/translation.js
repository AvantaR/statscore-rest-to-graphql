import axios from "../axios.js";

export default {
  index: async (limit = 25, page = 1) => {
    const params = {
      limit: limit,
      page: page
    }
    const result = await axios.get('/translations', { params: params });

    return result.data.api.data.translations;
  },
  show: async (id) => {
    const result = await axios.get(`/translations/${id}`);

    return result.data.api.data.translation;
  },
};
