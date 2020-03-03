import styled, { css } from 'styled-components';
import colors from '../../../assets/colors';

const Button = styled.button`
  border: solid 1px;
  border-color: ${props => (props.disabled ? '#ccc' : 'salmon')};
  color: ${props => (props.disabled ? '#ccc' : 'salmon')};
  border-radius: 30px;
  padding: 0.75em 2em;
  display: block;
  font-size: 1em;
  margin: 0 5px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: salmon;
    color: #fff;
  }

  ${props => props.busy && css`
    background-color: ${colors.greyLite};
    border: none;
    color: #fff;
  `}
`;

export default Button;
