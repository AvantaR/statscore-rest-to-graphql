import express from 'express';
import expressGraphQl from 'express-graphql';
import axios from 'axios';
import graphql from 'graphql-compose';
import { SportTC, SportShowTC } from './schemas/sport.js';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.API_URL;
const apiToken = process.env.API_TOKEN;

const { schemaComposer } = graphql;

schemaComposer.Query.addFields({
    sports: {
        type: [SportTC],
        args: { limit: 'Int' },
        resolve: (_, { limit }) => {
            return axios.get(`${apiUrl}/sports`).then(result => {
                return result.data.api.data.sports.slice(0, limit);
            })
        }
    },
    sport: {
        type: SportShowTC,
        args: { id: 'Int!' },
        resolve: (_, { id }) => {
            return axios.get(`${apiUrl}/sports/${id}?token=${apiToken}`).then(result => {
                return result.data.api.data.sport;
            })
        }
    }
})

const schema = schemaComposer.buildSchema();

const app = express();
app.use('/graphql', expressGraphQl.graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');