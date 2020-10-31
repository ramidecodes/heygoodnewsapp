import styled from '@emotion/styled';

const TopbarStyles = styled.header`
  background-color: ${(props) => props.theme.color.mainGreen};
  height: 4rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
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
        &.active,
        &:hover {
          color: ${(props) => props.theme.color.black};
        }
      }
    }
  }
`;

export default TopbarStyles;
