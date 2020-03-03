import styled from 'styled-components';
import React from 'react';
import colors from '../../assets/colors';
import Title from './Title';

const SidebarWrapper = styled.div`
  height: 100vh;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

const Span = styled.span`
  font-size: 1rem;
  display: block;
  color: ${colors.greyLite};
`;

function Sidebar() {
  return(
    <SidebarWrapper>
      <Title><Span>Fun with</Span> Forms</Title>
    </SidebarWrapper>
  )
}

export default Sidebar;

