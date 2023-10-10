import styled from "styled-components";

export const buttonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin-top: 150px;
  }
`;

export const buttonWrapper = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  width: 499px;
  height: 65px;
  margin-top: 10px;
  background: #000000;
  border: 1px solid #ffffff;
  border-radius: 10000px;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  opacity: 1;
  color: #ffffff;

  @media (max-width: 600px) {
    margin: 0;
    width: 85%;
    font-size: 32px;
  }
`;
