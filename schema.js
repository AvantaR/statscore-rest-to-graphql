import graphql from 'graphql-compose';
import sportResolvers from './resolvers/sport.js'
import venueResolvers from './resolvers/venue.js';
import eventResolvers from './resolvers/event.js';

const { schemaComposer } = graphql;

schemaComposer.Query.addFields({
    ...sportResolvers,
    ...venueResolvers,
    ...eventResolvers
})

export default schemaComposer.buildSchema();