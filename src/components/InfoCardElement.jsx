import React from "react";
import styled from "styled-components";

const InfoCardElement = () => {
  return (
    <Wrapper>
      <h3>Maquina Motors - Oficial de tercera</h3>
      <p>DICIEMBRE 2020 - DICIEMBRE 2021</p>
      <Stuff>
        <li>Revisiones y reparaciones</li>
        <li>Diagnóstico de averias</li>
        <li>Preentrega de motos nuevas y ocasión</li>
      </Stuff>
    </Wrapper>
  );
};
export default InfoCardElement;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
  margin-bottom: 0.5rem;
  padding: 0.6rem;
`;

const Stuff = styled.ul`
  padding: 0;
`;
