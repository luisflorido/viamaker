import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import { theme } from 'theme';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<div className="loading" />}>
        <Provider store={store}>
          <ToastContainer />
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
