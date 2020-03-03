import React from 'react';
import styled from 'styled-components';
import './App.css';
import Layout from '../../components/Layout';
import LoginForm from '../LoginForm';

const Container = styled.div`
  background: #e1eec3;
  background: radial-gradient(#e1eec3, #f05053);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  border-radius: 8px;
  width: 600px;
  background: #fff;
  padding: 20px 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <div className="App">
      <Layout>
        <Container>
          <Block>
            <LoginForm />
          </Block>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
