import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Homepage from '../../pages/homepage';
import About from '../../pages/about';
import Profile from '../../pages/profile';
import Contact from '../../pages/contact';
import Topbar from '../../components/Topbar';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer';

const AppStyles = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

function App() {
  return (
    <Router>
      <AppStyles>
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
        <Footer />
      </AppStyles>
    </Router>
  );
}

export default App;
