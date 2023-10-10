import styled from "styled-components";

export const LoginContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 290px;
  width: 105px;
  height: 51px;
  background: var(--light-gray);
  border-radius: 1000px;
  text-align: center;

  @media (max-width: 600px) {
    top: 100px;
    right: 57px;
    width: 70.5%;
  }
`;

export const LoginButton = styled.p`
  padding-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 10px;
  a {
    text-decoration: none;
    color: var(--black);
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
