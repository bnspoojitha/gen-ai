import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
      <div className="App">
         {/* <Routes>
          <Route path="/" element={<Login />} />
        </Routes> */}
        <Login />
      </div>
  );
}

export default App;
