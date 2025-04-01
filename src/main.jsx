import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; // 여기 변경
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter> {/* 여기 변경 */}
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
