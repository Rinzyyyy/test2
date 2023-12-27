import { AppContext } from "../../context/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Number = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <Text>
      {t("hello")}
      {context.value}
    </Text>
  );
};

const Text = styled.div`
  color: red;
`;

export default Number;
