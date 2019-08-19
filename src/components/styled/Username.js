import styled from 'styled-components';

export default styled.div`
  position: relative;
  cursor: pointer;

  ul {
    opacity: 0;
    /* z-index: -100; */
  }

  :hover {
    ul {
      opacity: 1;
      /* z-index: 1; */
    }
  }
`;
