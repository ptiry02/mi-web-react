import React from "react";
import styled from "styled-components";

export const Descr = () => {
  return (
    <Title>
      <h1>PAUL TIRY</h1>
      <h4>Mecánico y programador web</h4>
    </Title>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.8rem;
  padding: 0.6rem 0;
  h1,
  h4 {
    margin: 0;
  }
`;
