import { AppContext } from "../../hooks/context/context";
import { useContext } from "react";
import styled from "styled-components";

const Number = () => {
  const context = useContext(AppContext);

  return <Text>{context.value}</Text>;
};

const Text = styled.div`
  color: red;
`;

export default Number;
