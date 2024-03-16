import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Home from './components/home';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client'
import { GlobalProvider } from './components/GlobalStateProvider'; // Import GlobalStateProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <GlobalProvider>
    <Router>
      <Home />
    </Router>
  </GlobalProvider>
</React.StrictMode>,
  )
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();