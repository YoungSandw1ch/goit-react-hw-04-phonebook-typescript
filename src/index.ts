// import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from 'styled-components';
// import { theme } from 'constants';
import App from 'components/App/App';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// <ThemeProvider theme={theme}>
// </ThemeProvider>
