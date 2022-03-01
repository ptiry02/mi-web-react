import { MainCard } from "./components/MainCard";
import styled from "styled-components";
import Button from "./components/Button";
import { MenuItems } from "./components/MenuItems";
import { ExpCard } from "./components/ExpCard";

export const App = () => {
  return (
    <Container>
      <MenuList>
        {MenuItems.map((item, index) => (
          <Element key={index}>
            <Button
              id={item.id}
              className={item.cName}
              title={item.title}
              onClick
            />
          </Element>
        ))}
      </MenuList>
      <MainCard />
      <ExpCard />
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
