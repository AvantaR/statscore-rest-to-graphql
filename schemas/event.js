import graphql from 'graphql-compose';

const EventTC = graphql.schemaComposer.createObjectTC({
    name: 'Event',
    fields: {
        id: 'Int!',
        name: 'String!',
        relation_status: 'String!',
        start_date: 'String!',
        ft_only: 'String!',
        coverage_type: 'String!',
        scoutsfeed: 'String!',
        status_id: 'Int!',
        status_name: 'String!',
        status_type: 'String!',
        sport_id: 'Int!',
        sport_name: 'String!',
        clock_time: 'String',
        clock_status: 'String',
        winner_id: 'Int',
        progress_id: 'Int',
        bet_status: 'String!',
        booking_markets: 'String!',
        corner_markets: 'String!',
        bet_cards: 'String!',
        bet_corners: 'String!',
        neutral_venue: 'String!',
        item_status: 'String!',
        ut: 'Int!',
        slug: 'String',
        verified_result: 'String!',
        result_verified_by: 'Int',
        result_verified_at: 'String',
        is_protocol_verified: 'Boolean',
        protocol_verified_by: 'Int',
        protocol_verified_at: 'String',
        round_id: 'Int',
        round_name: 'String',
        venue_id: 'Int',
        event_stats_lvl: 'String!',
    },
});

const EventShowTC = EventTC.clone('EventShow');

export { EventTC, EventShowTC }