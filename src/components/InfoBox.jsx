import React from "react";
import styled from "styled-components";

const InfoBox = () => {
  const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #489991;
    border-radius: 10px;
    box-shadow: 0px 0px 3px black, 2px 2px 6px darkgray;
    padding: 1.2rem 2.3rem;
  `;
  const Icon = styled.i`
    margin-bottom: 0.7rem;
    font-weight: bold;
  `;
  return (
    <Info>
      <Icon className="fas fa-envelope fa-lg"> tirypaul@gmail.com</Icon>
      <Icon className="fas fa-phone-square fa-lg"> +34 679 704 916</Icon>
      <Icon className="fab fa-linkedin fa-lg"> /paul-tiry</Icon>
      <Icon className="fab fa-facebook-square fa-lg"> /tiry1</Icon>
    </Info>
  );
};

export default InfoBox;
