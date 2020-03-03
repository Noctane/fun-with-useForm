import styled from 'styled-components';
import Button from './Button';

import colors from '../../../assets/colors';

const SecondaryButton = styled(Button)`
  border: none;
  color: ${colors.greyLite};

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${colors.primary};
  }
`;

export default SecondaryButton;