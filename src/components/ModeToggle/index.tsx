import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import { ThemeType } from "../Theme";
import { useTranslation } from "react-i18next";

const ModeToggle = () => {
  const { setTheme } = useContext(AppContext);
  const { t } = useTranslation();
  return (
    <Button
      onClick={() =>
        setTheme((pre: ThemeType) => (pre === "Light" ? "Dark" : "Light"))
      }
    >
      {t("toggle mode")}
    </Button>
  );
};

export const Button = styled.button`
  margin: 20px;
  width: max-content;
`;

export default ModeToggle;
