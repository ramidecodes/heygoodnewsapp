import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TagStyles = styled.a`
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1rem;
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
  span {
    padding: 0.3rem 0.8rem;
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.color.gray};
    border-radius: ${({ theme }) => theme.standardRadious};
    &:hover {
      background-color: ${({ theme }) => theme.color.mainGreen};
    }
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
