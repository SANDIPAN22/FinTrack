const express = require("express");
const { ApolloServer } = require("@apollo/server");
const bodyParser = require("body-parser");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");
const mongoose = require("mongoose");
const { mergedResolvers } = require("./resolvers");
const { mergedTypeDefs } = require("./typeDefs");
const dotenv = require("dotenv");
dotenv.config();
async function startServer() {
  // express server related activities
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  // apollo server related activities
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });
  await server.start();

  // express app integrates with apollo server using 'graphql'  path
  app.use("/graphql", expressMiddleware(server));

  // connecting the mongoose server
  const dbConn = await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen(8000, () => {
    console.log(
      "✅ Server is running on port 8000. MongoDB is also connected with",
      dbConn.connection.host
    );
  });
}

startServer();
