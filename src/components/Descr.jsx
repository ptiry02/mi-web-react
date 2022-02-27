import React from "react";
import styled from "styled-components";

const Descr = () => {
  const Name = styled.h1`
    text-align: center;
  `;
  const Title = styled.h4`
    text-align: center;
  `;
  return (
    <div>
      <Name>PAUL TIRY</Name>
      <Title>Mecánico y programador web</Title>
    </div>
  );
};

export default Descr;
