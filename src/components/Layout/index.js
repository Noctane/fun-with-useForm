import React from 'react';
import styled from 'styled-components';

import Sidebar from '../Sidebar';

const Grid = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

function Layout({children}) {
  return(
    <Grid>
      <Sidebar>hello</Sidebar>
      <div>{children}</div>
    </Grid>
  )
}

export default Layout;