import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

// const root = {
//     hello: 'heel',
//     users: {
//         id: 1,
//         firstname: 'test',
//         lastname: 'tester',
//     },
// };

const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    //rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => console.log('Running server on 3000'));