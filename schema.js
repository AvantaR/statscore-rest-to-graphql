import graphql from "graphql-compose";
import sportResolvers from "./resolvers/sport.js";
import venueResolvers from "./resolvers/venue.js";
import eventResolvers from "./resolvers/event.js";
import translationResolvers from "./resolvers/translation.js";

const { schemaComposer } = graphql;

schemaComposer.Query.addFields({
  ...sportResolvers,
  ...venueResolvers,
  ...eventResolvers,
  ...translationResolvers,
});

export default schemaComposer.buildSchema();
