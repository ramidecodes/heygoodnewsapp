import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from '../../pages/homepage';
import About from '../../pages/about';
import Profile from '../../pages/profile';
import Contact from '../../pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
