import React from "react";
import { useColorScheme } from "use-color-scheme";
import { ThemeProvider } from "styled-components";
import { H1, H2, P, A } from "./components/Fonts";
import { Container } from "./components/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import { isNone } from "./selectors";

function App() {
  const { scheme } = useColorScheme();
  return (
    <ThemeProvider theme={{ scheme }}>
      <Container>
        <GlobalStyle />
        <P>
          Be mindful of your time:{" "}
          <A href="https://chrome.google.com/webstore/detail/muj%C5%8D-be-mindful-of-your-t/pdhdkakfpnlcbipchahefkoaiohkehao">
            Mujō
          </A>
        </P>
        <H2>Your current scheme is</H2>
        <H1>{scheme}</H1>
        {isNone({ theme: { scheme } }) ? (
          <P>
            (This could be that your browser does not support the detection or
            you have not set a preference)
          </P>
        ) : null}
        <P>
          Star on Github:{" "}
          <A href="https://github.com/jcblw/use-color-scheme">
            use-color-scheme
          </A>
        </P>
      </Container>
    </ThemeProvider>
  );
}

export default App;
