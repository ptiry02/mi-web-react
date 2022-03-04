import React from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";

export const ExpCard = ({ cardId }) => {
  return (
    <Card>
      <h1>{MenuItems.find((item) => item.id === cardId).content}</h1>
    </Card>
  );
};

const Card = styled.div`
  height: 468px;
  margin-left: 0.8rem;
  padding: 2.5rem;
  background-color: #a6a59c;
  width: 20%;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  text-align: center;
`;
