import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TagStyles = styled.a`
  color: ${(theme) => theme.color.black};
  span {
    background-color: ${(theme) => theme.color.gray};
  }
`;

const Tag = ({ children, link }) => (
  <TagStyles href={link}>
    <span>{children}</span>
  </TagStyles>
);

Tag.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
};
export default Tag;
