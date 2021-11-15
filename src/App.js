import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router';
import Store from '../src/redux/store'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
