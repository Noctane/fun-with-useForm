import styled from 'styled-components';

const ErrorSpan = styled.span`
  font-size: 12px;
  margin-top: 0.2em;
  color: red;
  display: ${props => (props.errors ? 'block' : 'none')};
  position: relative;
  transform: ${props => (props.errors ? 'translateY(0)' : 'translateY(-30px)')};
  transition: all ease-in 3s;
`;

export default ErrorSpan;
