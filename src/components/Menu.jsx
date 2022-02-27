import React from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [value, setValue] = React.useState("inicio");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Label = styled.label`
    min-width: 200px;
    max-width: 200px;
    padding: 0.6rem 0.6rem;
    background-color: #489991;
    color: black;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 10px;
    transition: all 300ms;

    :hover {
      background-color: #f2c24e;
      font-weight: bold;
    }

    :focus-within {
      color: black;
      background-color: #f2c24e;
      border-color: #8c7765;
      box-shadow: none;
      font-weight: bold;
    }
  `;

  return (
    <ButtonGroup>
      <Label>
        <MenuButton
          value="inicio"
          checked={value === "inicio"}
          onChange={handleChange}
        />
        INICIO
      </Label>

      <Label>
        <MenuButton
          value="exp"
          checked={value === "exp"}
          onChange={handleChange}
        />
        EXPERIENCIA
      </Label>

      <Label>
        <MenuButton
          value="form"
          checked={value === "form"}
          onChange={handleChange}
        />
        FORMACIÓN
      </Label>

      <Label>
        <MenuButton
          value="hab"
          checked={value === "hab"}
          onChange={handleChange}
        />
        HABILIDADES
      </Label>

      <Label>
        <MenuButton
          value="contact"
          checked={value === "contact"}
          onChange={handleChange}
        />
        CONTACTO
      </Label>
    </ButtonGroup>
  );
};

export default Menu;
