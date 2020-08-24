import axios from '../axios.js';

const EVENTS_RESOURCE = '/events';

export default {
    index: async(limit = 25, page = 1) => {
        const params = {
            limit: limit,
            page: page
        }
        const result = await axios.get(EVENTS_RESOURCE, { params: params });

        return result.data.api.data;
    },

    show: async(id) => {
        const result = await axios.get(`${EVENTS_RESOURCE}/${id}`);

        return result.data.api.data.competition.season.stage.group.event;
    }
}