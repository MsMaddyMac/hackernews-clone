const { ApolloServer } = require('apollo-server')

// defines GraphQL schema
const typeDefs = `
  type Query {
    info: String!
  }
`

// implements GraphQL schema (similar structure of corresponding typeDef)
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

// bundles schema and resolvers and passes it to ApolloServer
//- this tells the server what API operations are accepted and how they should be resolved
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );