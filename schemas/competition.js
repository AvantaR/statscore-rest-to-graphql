import graphql from "graphql-compose";
import { SeasonTC } from "./season.js";

const CompetitionTC = graphql.schemaComposer.createObjectTC({
  name: "Competition",
  fields: {
    id: "Int!",
    name: "String!",
    short_name: "String!",
    mini_name: "String!",
    gender: "String!",
    type: "String!",
    status: "String!",
    area_id: "Int!",
    area_name: "String!",
    area_sort: "Int!",
    area_code: "String!",
    overall_sort: "Int!",
    sport_id: "Int!",
    sport_name: "String!",
    tour_id: "Int!",
    tour_name: "String!",
    ut: "Int!",
    old_competition_id: "String!",
    slug: "String!",
    stats_lvl: "String!",
  },
});

const CompetitionShowTC = graphql.schemaComposer.createObjectTC({
  name: "CompetitionShow",
  fields: {
    id: "Int!",
    name: "String!",
    short_name: "String!",
    mini_name: "String!",
    gender: "String!",
    type: "String!",
    status: "String!",
    area_id: "Int!",
    area_name: "String!",
    area_sort: "Int!",
    area_code: "String!",
    overall_sort: "Int!",
    sport_id: "Int!",
    sport_name: "String!",
    tour_id: "Int!",
    tour_name: "String!",
    ut: "Int!",
    old_competition_id: "String!",
    slug: "String!",
    stats_lvl: "String!",
    generate_season_stats: "String!",
    status: "String!",
    seasons: [SeasonTC],
  },
});

export { CompetitionTC, CompetitionShowTC };
