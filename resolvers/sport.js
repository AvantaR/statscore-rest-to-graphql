import { SportTC, SportShowTC } from '../schemas/sport.js';
import sportRepository from '../repositories/sport.js';

export default {
    sports: {
        type: [SportTC],
        args: { limit: 'Int' },
        resolve: (_, { limit }) => {
            return sportRepository.index(limit);
        }
    },
    sport: {
        type: SportShowTC,
        args: { id: 'Int!' },
        resolve: (_, { id }) => {
            return sportRepository.show(id);
        }
    }
}