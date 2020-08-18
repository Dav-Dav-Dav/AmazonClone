import React from "react";
import styled from "styled-components";
import greyPot from "../Images/greyPlantPot.jpg";

const TwoBoxes = styled.div`
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

const TwoBoxesText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .twoBoxPosition {
    display: flex;
    flex-direction: column;
  }
`;

export default function Homepage() {
  return (
    <TwoBoxes>
      <div className="right">
        <TwoBoxesText>
          <div className="twoBoxPosition">
            <p>
              Plants <br /> Delivered
            </p>
            <p>
              Patch helps you discover the best plants for your space, <br />{" "}
              delivers them to your door and helps you look after them.
            </p>
            <button>PLANTS</button>
            <button>POTS</button>
          </div>
        </TwoBoxesText>
      </div>
      <div className="left">
        <img src={greyPot} />
      </div>
    </TwoBoxes>
  );
}
