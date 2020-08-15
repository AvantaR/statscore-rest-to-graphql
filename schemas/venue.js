import graphql from 'graphql-compose';

const VenueTC = graphql.schemaComposer.createObjectTC({
    name: 'Venue',
    fields: {
        id: 'Int!',
        name: 'String!',
        short_name: 'String!',
        country: 'String!',
        url: 'String!',
        status: 'String!',
        city: 'String!',
        lat: 'String',
        lng: 'String',
        opened: 'String',
        photo: 'String!',
        ut: 'Int!'
    },
});

const VenueSportDetailTC = graphql.schemaComposer.createObjectTC({
    name: 'VenueSportDetailTC',
    fields: {
        id: 'Int!',
        name: 'String!',
        value: 'String'
    }
})

const VenueSportTC = graphql.schemaComposer.createObjectTC({
    name: 'VenueSport',
    fields: {
        id: 'Int!',
        name: 'String!',
        venue_sport_details: [VenueSportDetailTC]
    }
})

const VenueShowTC = VenueTC.clone('VenueShow').addFields({
    sports: [VenueSportTC]
})

export { VenueTC, VenueShowTC }