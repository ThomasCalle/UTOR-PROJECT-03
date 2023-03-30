import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const CREATE_EVENT = gql`
mutation CREATE_EVENT($title: String!, $description: String!, $cost: Float!, $location: String!, $userId: ID!, $date: String!) {
  createEvent(title: $title, description: $description, cost: $cost, location: $location, user: $userId, date: $date) {
    id
    title
    description
    cost
    location
    date
  }
}
`;

export const UPDATE_EVENT = gql `
mutation UPDATE_EVENT($updateEventId: ID!, $title: String, $description: String, $cost: Float, $location: String, $date: String) {
  updateEvent(id: $updateEventId, title: $title, description: $description, cost: $cost, location: $location, date: $date) {
    id
    title
    description
    cost
    location
    date
    user {
      id
      username
    }
  }
}`;

export const DELETE_EVENT = gql`
  mutation DELETE_EVENT($deleteEventId: ID!) {
    deleteEvent(id: $deleteEventId)
  }
`;


// export const UPDATE_USER = gql`
//   mutation UPDATE_USER(
//     $updateUserId: ID!
//     $username: String
//     $email: String
//     $password: String
//   ) {
//     updateUser(
//       id: $updateUserId
//       username: $username
//       email: $email
//       password: $password
//     ) {
//       id
//       username
//       email
//       password
//     }
//   }
// `;

// export const DELETE_USER = gql`
//   mutation DeleteUser($deleteUserId: ID!) {
//     deleteUser(id: $deleteUserId)
//   }
// `;