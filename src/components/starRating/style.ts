import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const starLabel = styled.label`
  margin-right: 5px;
`;

export const starInput = styled.input`
  display: none;
`;

export const starFa = styled(FaStar)`
  stroke: var(--white);
  stroke-width: 20px;
`;
