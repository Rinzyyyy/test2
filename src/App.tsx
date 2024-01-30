import React from "react";
import styled from "styled-components";

import ModeToggle from "./components/ModeToggle";
import CountButton from "./components/CountButton";
import LanguageToggle from "./components/LanguageToggle";

import PromiseTest from "./components/promiseTest";
import TranslateTest from "./components/TranslateTest";
import ApiTest from "./components/ApiTest";

function App() {
  return (
    <>
      <ModeToggle />
      <LanguageToggle />
      <Container>
        <ApiTest />
        <TranslateTest />
        <CountButton />
        <PromiseTest />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default App;
