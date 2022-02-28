import React from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";

export const Menu = () => {
  return (
    <MainMenu>
      <List>
        {MenuItems.map((item, index) => {
          return (
            <Button key={index}>
              <Link id={item.title} className={item.cName} href={item.url}>
                {item.title.toUpperCase()}
              </Link>
            </Button>
          );
        })}
      </List>
    </MainMenu>
  );
};

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const Button = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  display: block;
  background-color: #489991;
  text-decoration: none;
  color: black;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  transition: all 300ms;
  :hover {
    background-color: #f2c24e;
    padding-left: 1rem;
    padding-right: 3.5rem;
  }
`;
