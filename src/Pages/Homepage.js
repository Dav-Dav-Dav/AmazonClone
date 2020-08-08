import React from "react";
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 40px;
  line-height: 18px;
  color: red;
  margin-bottom: 20px;
`;

export default function Homepage() {
  return (
    <div className="App">
      <Paragraph>Homepage</Paragraph>
    </div>
  );
}
