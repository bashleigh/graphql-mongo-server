import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'user',
    description: 'users',
    fields: () => ({
        id: {
            type: (GraphQLInt),
            description: 'The id of the user.',
        },
        firstname: {
            type: GraphQLString,
            description: 'The firstname of the user.',
        },
        lastname: {
            type: GraphQLString,
            description: 'The lastname of the user.',
        },
    }),
});