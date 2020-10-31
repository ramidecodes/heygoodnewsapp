import { Helmet } from 'react-helmet-async';
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <div>
        <h1>404</h1>
        <p>Oups... We couldn't find what you were looking for...</p>
      </div>
    </>
  );
};

export default NotFound;
