import graphql from 'graphql-compose';

const SportGenericTC = graphql.schemaComposer.createObjectTC({
    name: 'SportGeneric',
    fields: {
        id: 'String!',
        name: 'String!'
    }
});