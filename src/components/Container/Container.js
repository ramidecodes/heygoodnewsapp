import styled from '@emotion/styled';

const ContainerStyles = styled.main`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
