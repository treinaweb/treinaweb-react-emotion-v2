import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

const MeuSpan = styled('span')``;

const sumir = keyframes`
  0%{
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
`;

const MinhaDiv = styled('div')`
  background-color: white;
  color: blue;
  font-size: 50px;

  &:hover ${MeuSpan} {
    color: red;
    animation: ${sumir} 1s ease alternate-reverse infinite;
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