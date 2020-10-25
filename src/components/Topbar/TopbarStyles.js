import styled from '@emotion/styled';

const TopbarStyles = styled.section`
  background-color: ${(props) => props.theme.color.mainGreen};
  height: 4rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1rem;
  nav ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    list-style: none;
    li {
      margin-right: 1rem;
      a {
        color: ${(props) => props.theme.color.white};
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

export default TopbarStyles;
