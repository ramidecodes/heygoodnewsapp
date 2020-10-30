/* eslint-disable max-len */
import CardList from '../components/CardList/CardList';
const cardsData = [
  {
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    link: 'https://ramiroramirez.xyz/',
    date: '30 Oct 2020',
    origin: 'https://ramiroramirez.xyz/',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    title: "I'm a great title",
    description:
      // eslint-disable-next-line max-len
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '30 Oct 2020',
    link: 'https://ramiroramirez.xyz/',
    origin: 'https://ramiroramirez.xyz/',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    title: "I'm a great title",
    description:
      // eslint-disable-next-line max-len
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '30 Oct 2020',
    link: 'https://ramiroramirez.xyz/',
    origin: 'https://ramiroramirez.xyz/',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    title: "I'm a great title",
    description:
      // eslint-disable-next-line max-len
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '30 Oct 2020',
    link: 'https://ramiroramirez.xyz/',
    origin: 'https://ramiroramirez.xyz/',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    title: "I'm a great title",
    description:
      // eslint-disable-next-line max-len
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '30 Oct 2020',
    link: 'https://ramiroramirez.xyz/',
    origin: 'https://ramiroramirez.xyz/',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    title: "I'm a great title",
    description:
      // eslint-disable-next-line max-len
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '30 Oct 2020',
    link: 'https://ramiroramirez.xyz/',
    origin: 'https://ramiroramirez.xyz/',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
];

const Homepage = () => {
  return <CardList cards={cardsData} />;
};

Homepage.propTypes = {};

export default Homepage;
