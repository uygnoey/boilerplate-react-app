import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { unregister } from './serviceWorker';

render(<App/>, document.getElementById('root'));

if (process.env.BUILD_TAG) {
  console.log('%c%s', 'color: yellow;background:#333;font-size:11pt', process.env.BUILD_TAG);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
