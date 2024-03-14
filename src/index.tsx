import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import { GlobalProvider } from './components/GlobalStateProvider'; // Import GlobalStateProvider

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
    <GlobalProvider> 
      <Home />
      </GlobalProvider>
      {/* <Routes /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();