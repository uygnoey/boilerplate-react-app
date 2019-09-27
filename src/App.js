import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import logo from './logo.svg';

// eslint-disable-next-line no-unused-vars
const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
  }
`;

const Div = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  
`;

const AppLink = styled.a`
  color: #09d3ac;
`;

function App () {
  return (
    <Div>
      <Header>
        <Logo src={logo} alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </Header>
    </Div>
  );
}

export default App;
