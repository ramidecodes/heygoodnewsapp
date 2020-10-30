import PropTypes from 'prop-types';
import AuthorIcon from '../AuthorIcon';
import Tag from '../Tag/Tag';
import { getBaseDomain } from '../../utils/helpers';
import CardStyles from './CardStyles';

const Card = ({ cardData }) => {
  const categoryList = cardData.categories.forEach((category) => (
    <Tag link={`/categories/${category}`}>{category}</Tag>
  ));
  return (
    <CardStyles href={cardData.link} target="_blank">
      <article>
        <h1>{cardData.title}</h1>
        <p>{cardData.description}</p>

        <footer>
          <p>
            <AuthorIcon
              name={cardData.author.name}
              image={cardData.author.image}
              link={cardData.author.link}
            />
            {getBaseDomain(cardData.origin)}
            <span className="date">{cardData.date}</span>
          </p>
          <div>{categoryList}</div>
        </footer>
      </article>
    </CardStyles>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    origin: PropTypes.string,
    author: PropTypes.objectOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Card;
