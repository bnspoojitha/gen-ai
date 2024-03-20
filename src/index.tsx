import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './components/GlobalStateProvider'; 
import Login from './pages/Login';
import App from './App';
import Routes from './Routes';
// import { Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <GlobalProvider>
    <Router>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Login />  */}
      <Routes />
    </Router>
  </GlobalProvider>
</React.StrictMode>,
  )
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();