import { Helmet } from 'react-helmet-async';
const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div>
        <h1>About</h1>
        <p>The about description will be here.</p>
      </div>
    </>
  );
};

About.propTypes = {};

export default About;
