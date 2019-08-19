import gql from 'graphql-tag';

export default gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!, $confirmPassword: String!){
    signup(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      payload {
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