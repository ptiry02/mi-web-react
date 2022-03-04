import React from "react";
import styled from "styled-components";
import MenuItems from "./MenuItems";
import InfoCardElement from "./InfoCardElement";

const InfoCard = ({ cardId }) => {
  return (
    <Card>
      <h1>{MenuItems.find((item) => item.id === cardId).content}</h1>
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
      <InfoCardElement />
    </Card>
  );
};
export default InfoCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.8rem;
  padding: 1.5rem 2.5rem;
  background-color: #a6a59c;
  min-width: 20vw;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  height: 100%;
  overflow-y: scroll;
`;
