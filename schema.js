import graphql from 'graphql-compose';
import sportResolvers from './resolvers/sport.js'
import venueResolvers from './resolvers/venue.js';

const { schemaComposer } = graphql;

schemaComposer.Query.addFields({
    ...sportResolvers,
    ...venueResolvers
})

export default schemaComposer.buildSchema();