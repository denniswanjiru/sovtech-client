import styled from 'styled-components';

export default styled.ul`
  position: absolute;
  top: 25px;
  right: 0;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  width: 120px;
  height: 40px;
  display: grid;
  place-items: center;

  li {
   :hover {
     background: #eee;
   }
  }
`;
