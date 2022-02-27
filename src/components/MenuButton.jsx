import React from "react";
import styled from "styled-components";

const MenuButton = () => {
  const Radio = styled.input`
    position: absolute;
    opacity: 0;
  `;
  return <Radio name="radiobtn" type="radio" />;
};

export default MenuButton;
