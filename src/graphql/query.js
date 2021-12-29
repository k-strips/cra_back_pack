import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query($user: GetUserInput) {
    getUser(user: $user) {
      firstName
      lastName
      middleName
      userName
      address {
        email
        phone
        mobile
      }
      createdAt
    }
  }
`;

export const GET_NOTE = gql`
  query GetNote($note: GetNoteInput) {
    getNote(note: $note) {
      title
      pages {
        title
        body
      }
    }
  }
`;

export const LIST_NOTES = gql`
  query ListNotes($filter: TableNoteFilterInput, $limit: Int, $skip: Int) {
    listNotes(filter: $filter, limit: $limit, skip: $skip) {
      items {
        title
        created
        lastUpdate
        pages {
          title
        }
      }
      totalCount
    }
  }
`;

export const GET_PAGE = gql`
  query GetPage($page: GetPageInput) {
    getPage(page: $page) {
      title
      body
    }
  }
`;

export const LIST_PAGES = gql`
  query ListPages($filter: TablePageFilterInput, $limit: Int, $skip: Int) {
    listPages(filter: $filter, limit: $limit, skip: $skip) {
      items {
        title
      }
    }
  }
`;
