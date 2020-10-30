import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import About from '../../pages/about';
import Profile from '../../pages/profile';
import Contact from '../../pages/contact';
import Topbar from '../../components/Topbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
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
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
