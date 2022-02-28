import React from "react";
import styled from "styled-components";

export const Descr = () => {
  return (
    <div>
      <Name>PAUL TIRY</Name>
      <Title>Mecánico y programador web</Title>
    </div>
  );
};

const Name = styled.h1`
  text-align: center;
`;
const Title = styled.h4`
  text-align: center;
`;
