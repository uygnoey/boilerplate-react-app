import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';

import { demo } from './componets/demo';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Div = styled.div`
  text-align: center;
`;
function App () {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Router>
        <Div>
          <Route exact path="/" component={demo} />
        </Div>
      </Router>
    </React.Fragment>
  );
}

export default App;
