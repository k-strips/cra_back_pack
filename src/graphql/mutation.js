import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($password: String!, $userName: String, $email: String) {
    login(email: $email, username: $userName, password: $password) {
      user {
        id
        firstName
        userName
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $middleName: String
    $userName: String!
    $email: String!
    $password: String!
  ) {
    signup(firstName: $firstName, lastName: $lastName, middleName: $middleName, userName: $userName, email: $email, password: $password); {
      user {
        id
        firstName
        lastName
        userName
      }
    }
  }
`;
