import styled from "@emotion/styled/macro";
import { useState } from "react";

const MeuSpan = styled('span')``;

const MinhaDiv = styled('div')`
  background-color: white;
  color: blue;
  font-size: 50px;

  &:hover ${MeuSpan} {
    color: red;
    @media (max-width: 600px) {
      color: black;
    }
  }
`;

function App() {
  return (
    <div>
      <MinhaDiv>Treina Web<br />
        <MeuSpan>Plataforma para desenvolvedores...</MeuSpan>
      </MinhaDiv>

    </div>
  )
}

export default App
