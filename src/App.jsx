import { useState } from "react";
import styled from "styled-components";
import MainCard from "./components/MainCard";
import Button from "./components/menu/Button";
import MenuItems from "./components/menu/MenuItems";
import InfoCard from "./components/info-card/InfoCard";

const App = () => {
  const [cardId, setCardId] = useState("home");

  const handleClick = (data) => {
    setCardId(data);
  };

  return (
    <Container>
      <MenuList>
        {MenuItems.map((item) => (
          <Element key={item.id}>
            <Button
              ident={item.id}
              label={item.title}
              onClick={() => handleClick(item.id)}
              isSelected={cardId === item.id}
            />
          </Element>
        ))}
      </MenuList>
      <MainCard />
      {cardId !== "home" && cardId !== "contact" && (
        <InfoCard cardId={cardId} />
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50%;
  column-gap: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
`;

const Element = styled.li`
  display: block;
`;
