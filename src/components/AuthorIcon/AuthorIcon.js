import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const AuthorIconStyles = styled.a`
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  img {
    border-radius: 50%;
    height: 26px;
    width: 26x;
    border: 2px solid ${({ theme }) => theme.color.gray};
    vertical-align: middle;
    &:hover {
      border: 2px solid ${({ theme }) => theme.color.mainGreen};
    }
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
