import styled from "@emotion/styled/macro";
import { ThemeProvider } from "@emotion/react";

const MeuSpan = styled('span')``;

const dark = {
  corDaFonte: 'white',
  corDeFundo: 'black',
}

const light = {
  corDaFonte: 'black',
  corDeFundo: 'white',
}

const MinhaDiv = styled('div')`
  background-color: ${(props) => props.theme.corDeFundo};
  color: ${(props) => props.theme.corDaFonte};
  font-size: 50px;
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div>
        <MinhaDiv>Treina Web<br />
          <MeuSpan>Plataforma para desenvolvedores...</MeuSpan>
        </MinhaDiv>
      </div >
    </ThemeProvider >
  )
}

export default App