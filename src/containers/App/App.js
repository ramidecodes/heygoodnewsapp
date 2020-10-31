import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { HelmetProvider } from 'react-helmet-async';
import Head from '../../components/Head';
import Homepage from '../../pages/homepage';
import About from '../../pages/about';
import Profile from '../../pages/profile';
import Contact from '../../pages/contact';
import NotFound from '../../pages/not-found';
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
      <HelmetProvider>
        <Head />
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
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </AppStyles>
      </HelmetProvider>
    </Router>
  );
}

export default App;
