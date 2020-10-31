/* eslint-disable max-len */
import { Helmet } from 'react-helmet-async';

const Head = () => {
  return (
    <Helmet defaultTitle="HeyGoodNews" titleTemplate="%s - HeyGoodNews">
      <meta
        name="description"
        content="A news aggregator that uses machine learning to filter positive and inspiring content."
      />
      <link rel="canonical" href="http://heygood.news/" />
    </Helmet>
  );
};

export default Head;
