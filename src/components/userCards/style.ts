import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: inline-block;
  width: 1000px;
  margin-left: 100px;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  text-align: center;
`;

export const ArrowButton = styled.div`
  color: var(--white);
  cursor: pointer;
  margin: 0 16px;
`;

export const MoviesCard = styled.div`
  /* margin: 0 10px; */
  /* gap: -52px !important;
  border-radius: 1000px; */
  /* border: 2px solid white; */
  /* text-align: center; */
`;

export const MoviesWrapper = styled.div<{ isCurrentSlide: boolean }>`
  transform: ${(props) =>
    props.isCurrentSlide ? "translateY(-20px)" : "translateY(20px)"};
  opacity: ${(props) => (props.isCurrentSlide ? 1 : 0.5)};
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
`;

export const ImageContainer = styled.div`
  border-radius: 100px;
  border: 10px solid white;
  display: flex;
  overflow: hidden;
  width: 300px;
`;

export const ImageDesc = styled.h3`
  color: var(--white);
  cursor: pointer;
  font-size: 30px;
`;
