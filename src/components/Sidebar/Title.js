import styled from 'styled-components';
import colors from '../../assets/colors';
import H1 from '../H1';

const Title = styled(H1)`
  line-height: 1;
  transform: rotate(-12deg);
  width: auto;
  text-align: left;
  margin: 30px auto;
  display: inline-block;
  color: ${colors.primary};
`;

export default Title;