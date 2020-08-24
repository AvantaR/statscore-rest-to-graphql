import { EventTC, EventShowTC } from '../schemas/event.js';
import eventsRepository from '../repositories/events.js';

export default {
    events: {
        type: [EventTC],
        args: {
            limit: 'Int',
            page: 'Int'
        },
        resolve: async(_, { limit, page }) => {
            const events = [];
            const results = await eventsRepository.index(limit, page);

            results.competitions.forEach(competition => {
                competition.seasons.forEach(season => {
                    season.stages.forEach(stage => {
                        stage.groups.forEach(group => {
                            group.events.forEach(event => {
                                events.push(event);
                            })
                        })
                    })
                })
            });

            return events;
        }
    },
    event: {
        type: EventShowTC,
        args: {
            id: 'Int!'
        },
        resolve: async(_, { id }) => {
            return await eventsRepository.show(id);
        }
    }
}