import styled from "@emotion/styled"
import { useState } from "react";

const MinhaDiv = styled('div')`
  background-color: ${({ ligado }) => (ligado ? 'white' : 'red')};
  color: blue;
  font-size: 50px;
`;

const OutraDiv = styled(MinhaDiv)`
  padding: 25px;
  border: 10px solid black;
`;

function App() {
  const [ligado, setLigado] = useState(true);
  return (
    <div onClick={() => setLigado(!ligado)}>
      <MinhaDiv ligado={ligado}>Treina Web</MinhaDiv>
    </div>
  )
}

export default App
