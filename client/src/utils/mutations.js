// import { gql } from "@apollo/client";

// export const ADD_USER = gql`
// mutation Mutation($username: String!, $email: String!, $password: String!) {
//   createUser(username: $username, email: $email, password: $password) {
//     username
//     email
//   }
// }
// `;


import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $username: String, $email: String, $password: String) {
    updateUser(id: $id, username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String!, $cost: Float!, $location: String!) {
    addEvent(title: $title, description: $description, cost: $cost, location: $location) {
      id
      title
      description
      cost
      location
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent($id: ID!, $title: String, $description: String, $cost: Float, $location: String) {
    updateEvent(id: $id, title: $title, description: $description, cost: $cost, location: $location) {
      id
      title
      description
      cost
      location
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;