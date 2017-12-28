import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(process.env.SERVER_PORT, () => console.log(`Running server on ${process.env.SERVER_PORT}`));