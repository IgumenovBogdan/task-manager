import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StrictMode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <StrictMode>
            <App />
        </StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);
