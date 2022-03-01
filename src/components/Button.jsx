import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const handleClick = (data) => {
    let a = data;
    console.log(a);
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
};

const Btn = styled.a`
  display: block;
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
