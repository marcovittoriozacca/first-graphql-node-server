const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefsSchema = require("./schema/typeDefs");
const resolversSchema = require("./schema/resolvers");
const server = new ApolloServer({
    typeDefs: typeDefsSchema,
    resolvers: resolversSchema,
});
startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
