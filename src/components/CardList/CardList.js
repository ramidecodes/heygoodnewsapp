import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Card from '../Card';

const CardListStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  li {
    transition: width 0.4s ease;
    width: 340px;
    &:first-of-type {
      width: 100%;
    }
    @media ${({ theme }) => theme.media.md} {
      width: 100%;
    }
  }
`;

const CardList = ({ cards }) => {
  const cardList = cards.map((card) => (
    <li key={card.id}>
      <Card cardData={card} />
    </li>
  ));
  return <CardListStyles>{cardList}</CardListStyles>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
