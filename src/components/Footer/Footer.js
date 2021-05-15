import styled from '@emotion/styled';

const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.color.gray};
  width: 100%;
  align-self: flex-end;
  padding: ${({ theme }) => theme.padding.large};
  p {
    color: ${({ theme }) => theme.padding.black};
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>&#169; Hey Good News</p>
      <p>
        Made with love by{' '}
        <a href="https://ramiroramirez.xyz/" target="_blank" rel="noreferrer">
          Ramiro Ramirez
        </a>
      </p>
    </FooterStyles>
  );
};

export default Footer;
