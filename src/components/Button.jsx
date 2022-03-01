import React, { useState } from "react";
import styled from "styled-components";

export default function Button(props) {
  const [card, setCard] = useState(props.id);
  const handleClick = (data) => {
    setCard(data);
    console.log(card);
  };
  return (
    <Btn
      id={props.id}
      className={props.cName}
      onClick={() => handleClick(props.id)}
    >
      {props.title.toUpperCase()}
    </Btn>
  );
}

const Btn = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  background-color: #489991;
  text-decoration: none;
  color: black;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  transition: all 300ms;
  cursor: pointer;
  :hover {
    background-color: #f2c24e;
    padding-left: 1rem;
    padding-right: 3.5rem;
  }
`;
