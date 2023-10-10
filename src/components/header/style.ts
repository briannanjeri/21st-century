import styled from "styled-components";

export const HeaderParent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-left: 20px;
  a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    padding-top: 20px;
    justify-content: center;
    padding-left: 10px;
  }
`;

export const HeaderContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 75px;
  color: var(--white);
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const navItems = styled.div`
  display: flex;
  gap: 2rem;
  padding-right: 40px;
`;
