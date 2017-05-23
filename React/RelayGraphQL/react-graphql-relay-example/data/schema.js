import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql';

//need access to mongo
let Schema = (db) => {

  let linkType = new GraphQLObjectType({
    name : 'Link',
    fields: () => ({
      _id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString },
    })
  });

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new GraphQLList(linkType),
          resolve: () => db.collection('links').find({}).toArray() //todo : read from mongo
        }
      })
    })//,
    // mutation: new GraphQLObjectType({
    //   name: 'Mutation',
    //   fields: () => ({
    //     incrementCounter: {
    //       type: GraphQLInt,
    //       resolve: () => ++counter
    //     }
    //   })
    // })
  });

  return schema;
}

export default Schema;