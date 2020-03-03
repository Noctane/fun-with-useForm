import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.3em;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => (props.isErrored ? 'red' : '#2e4053')};
`;

export default Label;
