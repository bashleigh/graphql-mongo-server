import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, () => console.log('Running server on 3000'));