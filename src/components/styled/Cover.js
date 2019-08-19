import styled from 'styled-components';
import photo from '../../assets/tree.jpg';

export default styled.div`
  background-size: cover;
  background-position: bottom;
  background-attachment: center;
  background-image: url(${photo});
  height: 100vh;
  width: 100%;
  padding-left: 50px;
  display: flex;
  align-items: center;

   @media(max-width: 840px) {
    display: none;
  }
`;
