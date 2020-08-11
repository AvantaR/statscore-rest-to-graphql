# statscore-rest-to-graphql
GraphQL wrapper for Statscore REST API

## How to install

```
npm install
```

```
cp .env.example .env
```
Fill the .env file with your credentials

## How to run

You need to have Node version > 14 or 12 with --experimental-modules flag when running to use ES6 imports/exports.
```
node app.js
```
Open server url in favorite browser:
```
http://localhost:4000/graphql
```

## Available queries

```
sports(limit: Int): [Sport]
```
```
sport(id: Int!): SportShow
```
