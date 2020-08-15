import graphql from 'graphql-compose';

export const SportTC = graphql.schemaComposer.createObjectTC({
    name: 'Sport',
    fields: {
        id: 'Int!',
        name: 'String!',
        url: 'String!',
        active: 'String!',
        has_timer: 'String!',
        template: 'String!',
        incidents_positions: 'String!',
        ut: 'Int!'
    },
});

const StatusTC = graphql.schemaComposer.createObjectTC({
    name: 'Status',
    fields: {
        id: 'Int!',
        name: 'String!',
        short_name: 'String!',
        type: 'String!',
        ut: 'Int!'
    }
})

const ResultTC = graphql.schemaComposer.createObjectTC({
    name: 'Results',
    fields: {
        id: 'Int!',
        short_name: 'String!',
        name: 'String!',
        type: 'String!',
        code: 'String!',
        data_type: 'String!'
    }
})

graphql.schemaComposer.clone();

const StatTC = graphql.schemaComposer.createObjectTC({
    name: 'Stat',
    fields: {
        id: 'Int!',
        short_name: 'String!',
        name: 'String!',
        code: 'String!',
        data_type: 'String!'
    }
})

const StatsTC = graphql.schemaComposer.createObjectTC({
    name: 'Stats',
    fields: {
        team: [StatTC],
        person: [StatTC]
    }
})

const DetailTC = graphql.schemaComposer.createObjectTC({
    name: 'Detail',
    fields: {
        id: 'Int!',
        name: 'String!',
        code: 'String!',
        data_type: 'String',
        is_season_detail: 'Int',
        description: 'String',
        input: 'String!',
        type: 'String!',
        format: 'String!',
        nullable: 'String!',
        default: 'String!'
    }
})

const AttributeTC = graphql.schemaComposer.createObjectTC({
    name: 'Attribute',
    fields: {
        id: 'Int!',
        name: 'String!',
        short_name: 'String!',
        sort_order: 'Int!'
    }
})

const IncidentTC = graphql.schemaComposer.createObjectTC({
    name: 'Incident',
    fields: {
        id: 'Int!',
        name: 'String!',
        code: 'String!',
        important: 'String!',
        important_for_trader: "String!",
        sport_id: 'Int!',
        type: 'String',
        for: 'String',
        group: 'String',
        details: 'String!',
        game_break: 'String!',
        ut: 'Int!',
        attributes: [AttributeTC]
    }
})

const StandingColumnTC = graphql.schemaComposer.createObjectTC({
    name: 'StandingColumn',
    fields: {
        id: 'Int!',
        name: 'String!',
        short_name: 'String!',
        code: 'String!'
    }
})

const StandingTypeTC = graphql.schemaComposer.createObjectTC({
    name: 'StandingType',
    fields: {
        id: 'Int!',
        name: 'String!',
        ut: 'Int!',
        columns: [StandingColumnTC]
    }
})

const VenueDetailTC = graphql.schemaComposer.createObjectTC({
    name: 'VenueDetail',
    fields: {
        id: 'Int!',
        name: 'String!',
        description: 'String'
    }
})

export const SportShowTC = SportTC.clone('SportShow').addFields({
    statuses: [StatusTC],
    results: [ResultTC],
    stats: StatsTC,
    details: [DetailTC],
    incidents: [IncidentTC],
    standings_types: [StandingTypeTC],
    venues_details: [VenueDetailTC],
});