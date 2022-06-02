import styled from "styled-components";

export const Card = styled.li`
  height: 60px;
  width: 200px;
  background-color: ${({ color }) => color};
  display: inline-flex;
  margin: 20px;
  justify-content: center;
  color: ${({ letterColor }) => letterColor};
`;
