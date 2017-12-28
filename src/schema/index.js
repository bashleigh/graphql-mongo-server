import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLID,
} from 'graphql';
import db from './../db';

import getProjection from './../getProjection';

import users from './users';
import userModel from './../models/user';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => {
            return {
                hello: {
                    type: GraphQLString,
                    resolve: () => {
                        return 'hello ';
                    },
                },
                users: {
                    type: new GraphQLList(users),
                    resolve: async (root, params, options, fieldASTs) => {

                        const projection = getProjection(fieldASTs);

                        console.log('select', projection);

                        const results = await userModel.find()
                            .select(projection)
                            .exec();

                        return results;
                    },
                },
                user: {
                    type: users,
                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLString),
                        },
                    },
                    resolve: (root, params, options, fieldASTs) => {
                        const projection = getProjection(fieldASTs);

                        return userModel
                            .findById(params.id)
                            .select(projection)
                            .exec();
                    },
                },
            };
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => {
            return {
                hello: {
                    type: GraphQLString,
                },
                user: {
                    type: users,
                    args: {
                        input: {
                            type: new GraphQLInputObjectType({
                                name: 'UserInput',
                                description: 'Input user payload',
                                fields: () => ({
                                    firstname: {
                                        type: GraphQLString,
                                    },
                                    lastname: {
                                        type: GraphQLString,
                                    },
                                }),
                            }),
                        },
                    },
                    resolve: async (root, params, options, fieldASTs) => {

                        console.log(params);

                        const user = new userModel({
                            firstname: params.input.firstname,
                            lastname: params.input.lastname,
                        });

                        console.log(user);

                        user.save();

                        return user;
                    },
                },
            };
        },
    }),

});