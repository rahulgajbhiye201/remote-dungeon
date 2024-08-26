import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// GraphQL Imports
import gql from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@apollo/server/express4";
import { readFileSync } from "fs";
import resolvers from "./lib/resolver";

// Express App
const app: Express = express();

// Middlewares
const corsOptions = {
  origin: `${process.env.CORS_ORIGIN}`,
  credentials: true,
};

console.log(process.env.CORS_ORIGIN);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(cors(corsOptions));

// GraphQL Server
async function startServer() {
  const typeDefs = gql(
    readFileSync("./src/models/graphql/schema.graphql", {
      encoding: "utf-8",
    })
  );

  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    introspection: process.env.NODE_ENV !== "production",
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));
}

// Start GraphQL Server
startServer();

export default app;
