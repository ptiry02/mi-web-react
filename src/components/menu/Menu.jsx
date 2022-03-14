import React from "react";
import styled from "styled-components";
import MenuItems from "./MenuItems";
import Button from "./Button";

const Menu = ({ isSelected, handleClick }) => {
  return (
    <MenuList>
      {MenuItems.map((item) => (
        <Element key={item.id}>
          <Button
            ident={item.id}
            label={item.title}
            onClick={() => handleClick(item.id)}
            isSelected={isSelected === item.id}
          />
        </Element>
      ))}
    </MenuList>
  );
};
export default Menu;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
`;

const Element = styled.li`
  display: block;
`;
