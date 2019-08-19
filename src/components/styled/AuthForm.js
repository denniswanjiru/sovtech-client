import styled from 'styled-components';

export default styled.form`
 padding: 120px 80px;
 width: 100%;

  @media(max-width: 840px) { /* tablets  and  ipad */
   padding: 100px 30px;
  }

  @media(max-width: 400px) { /* mobile phones */
   padding: 30px;
  }
`;
