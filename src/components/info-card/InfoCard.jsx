import React from "react";
import styled from "styled-components";
import MenuItems from "../menu/MenuItems";
import ExpElements from "../info-card/exp/ExpElements";

const InfoCard = ({ cardId }) => {
  return (
    <Card>
      <h1>
        {MenuItems.find((item) => item.id === cardId).title.toUpperCase()}
      </h1>
      {cardId === "exp" && <ExpElements cardId={cardId} />}
    </Card>
  );
};
export default InfoCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.6rem;
  background-color: #a6a59c;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  width: 25vw;
  height: 100%;
  overflow-y: scroll;
`;
