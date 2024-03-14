import './App.css';
import Home from './components/home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        {/* <Home /> */}
        <h1>App</h1>
      </div>
    </Router>
  );
}

export default App;
