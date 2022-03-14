import { useState } from "react";
import styled from "styled-components";
import Menu from "./components/menu/Menu";
import MainCard from "./components/main-card/MainCard";
import ExpCard from "./components/info-card/exp/ExpCard";
import FormCard from "./components/info-card/form/FormCard";

const App = () => {
  const [cardId, setCardId] = useState("home");

  const handleClick = (data) => {
    setCardId(data);
    console.log(data);
  };

  return (
    <MainContainer>
      <LeftContainer id="left-cont">
        <Menu handleClick={handleClick} isSelected={cardId} />
        <MainCard />
      </LeftContainer>
      <RightContainer id="right-cont">
        <ExpCard show={cardId === "exp"} container="right-cont" />
        <FormCard show={cardId === "form"} container="right-cont" />
      </RightContainer>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 50%;
  column-gap: 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  column-gap: 1rem;
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;
