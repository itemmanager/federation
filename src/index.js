const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway();

const index = new ApolloServer({ gateway });

index.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
