import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { theme } from './styles/theme';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
