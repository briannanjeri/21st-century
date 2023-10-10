import styled from "styled-components";

export const titleWrapper = styled.div`
  width: 224px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;

  @media (max-width: 600px) {
    width: 224px;
    font-size: 28px;
    margin-bottom: 3px;
    text-align: center;
    margin: auto;
  }
`;

export const attributeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: absolute;
  left: 8.26%;
  right: 79.58%;
  top: 32.6%;
  bottom: 65.21%;
  width: 230px;
  p {
    height: 32px;
  }

  @media (max-width: 600px) {
    width: 220px;
    justify-content: space-between;
    text-align: center;
  }
`;

export const attributesWrapper = styled.div`
   display: none;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  width: 100px;
  color: #bababa;
`;

export const attributesValuesWrapper = styled.div`
  display: none;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  width: 100px;
  color: #ffffff;
`;

export const imageOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 344.41px;
  border: 10px solid #ffffff;
  border-radius: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  border: 10px solid #ffffff;
  z-index: 1;
`;

export const imageWrapper = styled.div`
  position: relative;
  img {
    margin-top: 20px;
    width: 230px;
    height: 344.21px;
    background: rgba(0, 0, 0, 0.85);
    border: 10px solid #ffffff;
    border-radius: 60px;
  }

  &:hover {
    ${attributesWrapper} {
      display: block;
      z-index: 2;
    }
  }

  &:hover {
    ${attributesValuesWrapper} {
      display: block;
      z-index: 2;
    }
  }

  &:hover {
    ${imageOverlay} {
      display: block;
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: auto;
    img {
      width: 100%;
    }
  }
`;
