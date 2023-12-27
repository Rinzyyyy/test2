import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LangType } from "../../i18n/i18n";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: LangType) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Button onClick={() => changeLanguage("zh_TW")}>中文</Button>
      <Button onClick={() => changeLanguage("en")}>English</Button>
    </>
  );
};

const Button = styled.button`
  margin: 20px;
  width: max-content;
  height: 20px;
`;

export default LanguageToggle;
