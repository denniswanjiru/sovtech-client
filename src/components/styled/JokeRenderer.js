import styled from 'styled-components';

export default styled.div`
  display: grid;
  padding: 150px 200px;
  font-size: 35px;
  line-height: 45px;
  letter-spacing: 3px;
  place-items: center;

  p {
    margin-bottom: 30px;
  }

   @media(max-width: 1100px) {
    padding: 120px 50px;
    font-size: 25px;
    line-height: 35px;
    margin-top: 20px;
  }

  @media(max-width: 600px) {
    padding: 50px 0px;
  }
`;
