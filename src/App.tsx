import React from "react";
import Number from "./components/Note";
import styled from "styled-components";
import ModeToggle from "./components/ModeToggle";
import CountButton from "./components/CountButton";

function App() {
  return (
    <>
      <ModeToggle />
      <Container>
        <Number />
        <CountButton />
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
