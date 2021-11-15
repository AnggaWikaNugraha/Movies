import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import RouterApp from './router';

function App() {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
