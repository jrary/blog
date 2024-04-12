import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
