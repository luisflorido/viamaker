import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <div className="h-100">
      <Suspense fallback={<div className="loading" />}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
