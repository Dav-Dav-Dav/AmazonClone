import styled from "styled-components";

export const TwoBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 953.74px;
  gap: 15px 10px;

  .right {
    grid-area: 1 / 1 / 1 / 1;
  }

  .left {
    background: green;
    grid-area: 1 / 2 / 1 / 2;
    background: green;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;
