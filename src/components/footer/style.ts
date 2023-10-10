import styled from "styled-components";

export const FooterSection = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  background: var(--light-gray-80);
  background: var(--light-gray-80);

  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  border: 0px solid var(--white);
  border-radius: 0px;
  text-align: center;
`;

export const FooterLinks = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 65px;
  a {
    text-decoration: none;
    color: var(--black);
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const FooterCite = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 49px;
  color: var(--black);
  line-height: 49px;
  color: var(--black);

  @media (max-width: 600px) {
    line-height: 49px;
    font-size: 25px;
  }
`;
