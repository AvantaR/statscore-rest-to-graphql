import axios from "../axios.js";

export default {
  index: async (limit) => {
    const result = await axios.get(`/competitions`);

    return result.data.api.data.competitions.slice(0, limit);
  },
  show: async (id) => {
    const result = await axios.get(`/competitions/${id}`);

    return result.data.api.data.competition;
  },
};
