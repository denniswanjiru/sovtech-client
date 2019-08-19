import gql from 'graphql-tag';

export default gql`
  query SigninQuery($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      payload {
        token
        user {
            email
            name
          }
        }
        error {
          field
          message
        }
    }
  }
`