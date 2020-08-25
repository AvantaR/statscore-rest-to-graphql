import axios from "../axios.js";

export default {
  index: async (limit) => {
    const result = await axios.get(`/translations`);

    return result.data.api.data.translations.slice(0, limit);
  },
  show: async (id) => {
    const result = await axios.get(`/translations/${id}`);

    return result.data.api.data.translation;
  },
};
