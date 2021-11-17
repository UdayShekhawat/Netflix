
import './App.css';
// import Login from './component/Home';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './component/Router/Routes';
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
