import axios from "../axios.js";

export default {
  index: async () => {
    const result = await axios.get(`/seasons`);

    return result.data.api.data;
  },
  show: async (id) => {
    const result = await axios.get(`/seasons/${id}`);

    return result.data.api.data.competition.season;
  },
};
