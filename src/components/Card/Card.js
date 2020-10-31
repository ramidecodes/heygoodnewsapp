import PropTypes from 'prop-types';
import AuthorIcon from '../AuthorIcon';
import Tag from '../Tag';
import { getBaseDomain } from '../../utils/helpers';
import CardStyles from './CardStyles';

const Card = ({ cardData }) => {
  const categoryList = cardData.categories.map((category) => (
    <Tag link={`/categories/${category}`} key={category}>
      {category}
    </Tag>
  ));
  const baseDomain = getBaseDomain(cardData.link);
  const originLink = `https://${baseDomain}/`;
  return (
    <CardStyles>
      <h1>
        <a href={cardData.link} target="_blank" rel="noreferrer">
          {cardData.title}
        </a>
      </h1>
      <p className="subheader">
        <span className="date">{cardData.date}</span>
        {' | '}
        <a href={originLink} target="_blank" rel="noreferrer">
          {baseDomain}
        </a>
      </p>
      <p>{cardData.description}</p>
      <footer>
        <AuthorIcon
          name={cardData.author.name}
          image={cardData.author.image}
          link={cardData.author.link}
        />
        {categoryList}
      </footer>
    </CardStyles>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string,
    origin: PropTypes.string,
    author: PropTypes.objectOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Card;
