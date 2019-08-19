import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-rows: max-content, 40px, 20px;
  margin-bottom: 20px;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : 'unset'}
`;