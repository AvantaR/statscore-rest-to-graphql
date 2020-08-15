import _ from './dotenv.js';
import schema from './schema.js';
import express from 'express';
import expressGraphQl from 'express-graphql';

const app = express();
app.use('/graphql', expressGraphQl.graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');