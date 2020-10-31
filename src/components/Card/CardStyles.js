import styled from '@emotion/styled';

const CardStyles = styled.article`
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 15px;
  min-width: 320px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.standardShadow};
  &:hover {
    box-shadow: ${({ theme }) => theme.raisedShadow};
    transition: box-shadow 0.4s ease;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    a {
      color: ${({ theme }) => theme.color.black};
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.color.mainGreen};
      }
    }
  }
  .subheader {
    margin: 0;
    color: ${({ theme }) => theme.color.darkGray};
    a {
      color: ${({ theme }) => theme.color.darkGray};
      &:hover {
        color: ${({ theme }) => theme.color.mainGreen};
      }
    }
  }
  footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
`;

export default CardStyles;
