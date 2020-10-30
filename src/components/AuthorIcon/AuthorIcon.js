import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const AuthorIconStyles = styled.a`
  img {
    border-radius: 50%;
    height: 24px;
    width: 24px;
  }
`;

const AuthorIcon = ({ name, image, link }) => (
  <AuthorIconStyles href={link} target="_blank">
    <img src={image} alt={name} />
  </AuthorIconStyles>
);

AuthorIcon.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.any,
};
export default AuthorIcon;
