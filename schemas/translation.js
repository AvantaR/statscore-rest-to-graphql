import graphql from "graphql-compose";

const TranslationTC = graphql.schemaComposer.createObjectTC({
  name: "Translation",
  fields: {
    id: "Int!",
    lang_code: "String!",
    value: "String!",
    resource_id: "Int!",
    resource_type: "String!",
    resource_field: "String!",
    client_id: "Int!",
  },
});

export { TranslationTC };
