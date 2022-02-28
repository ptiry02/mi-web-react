import React from "react";
import styled from "styled-components";
import { ProfilePic } from "./ProfilePic";
import { Descr } from "./Descr";
import { InfoBox } from "./InfoBox";

export const MainCard = () => {
  return (
    <Card>
      <ProfilePic />
      <Descr />
      <InfoBox />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  font-size: 1rem;
  background-color: #a6a59c;
  min-width: 350px;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
`;
