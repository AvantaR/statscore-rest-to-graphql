import graphql from "graphql-compose";
import sportResolvers from "./resolvers/sport.js";
import venueResolvers from "./resolvers/venue.js";
import eventResolvers from "./resolvers/event.js";
import translationResolvers from "./resolvers/translation.js";
import competitionResolvers from "./resolvers/competition.js";
import seasonsResolvers from "./resolvers/season.js";

const { schemaComposer } = graphql;

schemaComposer.Query.addFields({
  ...sportResolvers,
  ...venueResolvers,
  ...eventResolvers,
  ...translationResolvers,
  ...competitionResolvers,
  ...seasonsResolvers
});

export default schemaComposer.buildSchema();
