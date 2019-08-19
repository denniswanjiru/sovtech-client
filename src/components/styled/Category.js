import styled from 'styled-components';

export default styled.div`
  display: grid;
  background: #fff;
  width: 250px;
  height: 150px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  place-items: center;
  font-size: 34px;
  cursor: pointer;
  color: #000;

  @media(max-width: 580px) {
    width: calc(100vw - 100px);
    height: 160px;
  }
`;