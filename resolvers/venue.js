import { VenueTC, VenueShowTC } from '../schemas/venue.js';
import venueRepository from '../repositories/venue.js';

export default {
    venues: {
        type: [VenueTC],
        args: {
            limit: 'Int',
            page: 'Int'
        },
        resolve: (_, { limit, page }) => {
            return venueRepository.index(limit, page);
        }
    },
    venue: {
        type: VenueShowTC,
        args: {
            id: 'Int!'
        },
        resolve: (_, { id }) => {
            return venueRepository.show(id);
        }
    }
}