import React from "react";
import styled from 'styled-components';

const TwoBoxes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 953.74px;
	  gap: 15px 10px;

  .right {
    grid-area: 1 / 1 / 1 / 1;
    background: yellow;
  }

  .left {
    background: green;
    grid-area: 1 / 2 / 1 / 2;
    background: green;
  }
`;


export default function Homepage() {
  return (
    <TwoBoxes>
        <div className="right"> 
          <p>Homepage</p>
        </div>
        <div className="left"> 
        </div> 
    </TwoBoxes>
  );
}
