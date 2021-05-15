/* eslint-disable max-len */
import CardList from '../components/CardList/CardList';
const cardsData = [
  {
    id: 'alkfdjads',
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '2020/10/31',
    link: 'https://ramiroramirez.xyz/somewhere',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society', 'nature', 'spiritual'],
  },
  {
    id: 'alkfdjagg,',
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '2020/10/31',
    link: 'https://ramiroramirez.xyz/somewhere',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society', 'nature', 'spiritual'],
  },
  {
    id: 'alkfdjcvb',
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '2020/10/31',
    link: 'https://ramiroramirez.xyz/somewhere',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    id: 'alkfdlbbs',
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '2020/10/31',
    link: 'https://ramiroramirez.xyz/somewhere',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    id: 'alkfduiop',
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '2020/10/31',
    link: 'https://ramiroramirez.xyz/somewhere',
    author: {
      name: 'Ramiro',
      link: 'https://twitter.com/eco_virtual',
      image: 'https://via.placeholder.com/150',
    },
    categories: ['science', 'society'],
  },
  {
    id: 'alkfdhkld',
    title: "I'm a great title",
    description:
      'Let me describe what will happen if you read the next piece. Let me describe what will happen if you read the next piece.',
    date: '2020/10/31',
    link: 'https://ramiroramirez.xyz/somewhere',
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
