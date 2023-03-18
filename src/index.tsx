import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <BrowserRouter>
    <HashRouter>
        <App />
    </HashRouter>
  // </BrowserRouter>
);

