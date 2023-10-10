import styled from "styled-components";

export const SortContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 80px;
  width: 170px;
  height: 51px;
  background: var(--light-gray);
  border-radius: 1000px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 600px) {
    top: 170px;
    right: 57px;
    width: 70.5%;
  }
`;

export const SortButton = styled.div`
  padding-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: var(--black);

  @media (max-width: 600px) {
    line-height: 20px;
    font-size: 20px;
    font-weight: 300;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
  background-color: var(--light-gray);
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled.li<{ selected?: boolean }>`
  padding: 2px;
  cursor: pointer;
  color: var(--black);
  background-color: ${(props) =>
    props.selected ? "var(--blue-shade)" : "transparent"};
  border-radius: ${(props) => (props.selected ? "5px" : "0")};
`;
