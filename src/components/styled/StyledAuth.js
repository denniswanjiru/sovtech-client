import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 525px;

  @media(max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;