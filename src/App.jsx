import { MainCard } from "./components/MainCard";
import styled from "styled-components";
import { Button } from "./components/Button";
import { MenuItems } from "./components/MenuItems";
import { ExpCard } from "./components/ExpCard";
import { useState } from "react";

export const App = () => {
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
              cName={item.cName}
              label={item.title}
              onClick={() => handleClick(item.id)}
              isSelected={cardId === item.id}
            />
          </Element>
        ))}
      </MenuList>
      <MainCard />
      {cardId !== "home" && <ExpCard cardId={cardId} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
`;

const Element = styled.li`
  display: block;
`;
