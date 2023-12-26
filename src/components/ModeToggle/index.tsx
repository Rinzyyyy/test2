import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../hooks/context/context";
import { ThemeType } from "../Theme";

const ModeToggle = () => {
  const { setTheme } = useContext(AppContext);
  return (
    <Button
      onClick={() =>
        setTheme((pre: ThemeType) => (pre === "Light" ? "Dark" : "Light"))
      }
    >
      toggle mode
    </Button>
  );
};

const Button = styled.button`
  margin: 20px;
  width: max-content;
  height: 20px;
`;

export default ModeToggle;
