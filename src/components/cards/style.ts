import styled from "styled-components";

export const cardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const errorWrapper = styled.div`
  width: 1000px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #ffffff;
  padding-top: 80px;
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
