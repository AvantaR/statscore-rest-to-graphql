import graphql from "graphql-compose";

const SeasonTC = graphql.schemaComposer.createObjectTC({
  name: "Season",
  fields: {
    id: "Int!",
    name: "String!",
    year: "String!",
    actual: "String!",
    ut: "Int!",
    old_season_id: "String!",
    range_level: "Int!",
    stats_lvl: "String!",
  },
});

export { SeasonTC };
