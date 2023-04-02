const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    password: String
    events: [Event]
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    cost: Float!
    location: String!
    user: User
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    events: [Event]!
    event(id: ID!): Event
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createEvent(
      title: String!
      description: String!
      cost: Float!
      location: String!
      user: ID!
      date: String!
    ): Event
    updateEvent(
      id: ID!
      title: String
      description: String
      cost: Float
      location: String
      date: String
    ): Event
    deleteEvent(id: ID!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
