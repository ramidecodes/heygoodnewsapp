import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import About from '../../pages/about';
import Profile from '../../pages/profile';
import Contact from '../../pages/contact';
import Topbar from '../../components/Topbar';
import Container from '../../components/Container/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Container>
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
        </Container>
      </div>
    </Router>
  );
}

export default App;
