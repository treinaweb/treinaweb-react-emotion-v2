import styled from "@emotion/styled/macro";
import { useState } from "react";

const MeuSpan = styled('span')``;

const MinhaDiv = styled('div')`
  background-color: white;
  color: blue;
  font-size: 50px;

  &:hover ${MeuSpan} {
    color: red;
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
