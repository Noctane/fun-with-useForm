import styled from 'styled-components';

const Input = styled.input`
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1.5em 2em;
  border: solid 1px;
  border-color: ${props => (props.isErrored ? 'red' : '#ddd')};
  outline: none;
  transition: border ease-in 0.2s;
  min-width: 220px;
  width: 100%;
  color: #2e4053;

  ::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: salmon;
  }
`;

export default Input;
