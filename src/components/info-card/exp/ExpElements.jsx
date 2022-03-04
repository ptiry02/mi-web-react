import React from "react";
import styled from "styled-components";
import ExpInfoItems from "./ExpInfoItems";

const ExpElements = ({ cardId }) => {
  return (
    <>
      {ExpInfoItems.map((item) => (
        <Wrapper cardId={cardId} key={item.key}>
          <h3>{item.job}</h3>
          <p>{item.date}</p>
          <article>{item.functions}</article>
        </Wrapper>
      ))}
    </>
  );
};
export default ExpElements;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
  margin-bottom: 0.5rem;
  padding: 0.6rem;
`;
