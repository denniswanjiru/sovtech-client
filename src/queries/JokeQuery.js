import gql from 'graphql-tag';

export default gql`
  query JokeQuery($category: String!) {
    joke(cat: $category) {
      value
      categories
    }
  }
`