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

const passport = require("passport");
const session = require("express-session");
const connectMongoSession = require("connect-mongodb-session");
const { buildContext } = require("graphql-passport");
const { configurePassport } = require("./passport/passport.config");

async function startServer() {
  // express server related activities
  const app = express();
  app.use(bodyParser.json());
  // allowing cors
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  // create mongoDBStore to handle sessions
  const MongoStore = connectMongoSession(session);
  const store = new MongoStore({
    uri: process.env.MONGO_DB_URI,
    collection: "sessions",
  });

  store.on("error", (err) => {
    console.error(`Error connecting to MongoDB session store: ${err}`);
  });

  // set the session
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true, // set to true for HTTPS
      },
      store: store,
    })
  );

  // enabling passport
  app.use(passport.initialize());
  app.use(passport.session());
  configurePassport();

  // apollo server related activities
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });
  await server.start();

  // express app integrates with apollo server using 'graphql'  path
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );

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
