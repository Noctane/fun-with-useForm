import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
`;

function Layout({children}) {
  return(
    <Grid>
      {children}
    </Grid>
  )
}

export default Layout;