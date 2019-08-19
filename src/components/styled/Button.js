import styled from 'styled-components';

export default styled.button`
  font-size: 14px;
  width:  ${props => props.width ? props.width : '100%'};;
  height: 40px;
  color: ${props => props.color ? props.color : '#fff'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#009688'};
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #00877a;
  }

  ${({ disabled }) => disabled && `
    background: #ccc;
    color: #999;
    cursor: not-allowed

    :hover {
      background: #ccc;
      color: #999;
    }
  `}
`;
