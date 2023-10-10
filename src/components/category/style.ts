import styled from "styled-components";

export const categoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  margin-top: 30px;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const categoriesWrapper = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  width: 135px;
  height: 65px;
  left: 171px;
  top: 223px;
  background: rgba(217, 217, 217, 0.1);
  border: 3px solid #ffffff;
  border-radius: 1000px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 41px;
  color: #ffffff;

  @media (max-width: 600px) {
    width: 85%;
    font-size: 25px;
  }
`;
