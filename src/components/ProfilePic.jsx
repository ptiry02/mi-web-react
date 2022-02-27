import React from "react";
import styled from "styled-components";
import profilePic from "../assets/images/yo_en_moto.jpg";

const ProfilePic = () => {
  const Photo = styled.div`
    height: 200px;
    width: fit-content;
    margin: 0px auto;
    overflow: hidden;
    border-radius: 99999px;
    box-shadow: 0px 0px 3px black, 2px 2px 6px darkgray;
    img {
      height: 200px;
    }
  `;

  return (
    <Photo id="photo">
      <img src={profilePic} alt="Foto perfil" id="profilePic" />
    </Photo>
  );
};

export default ProfilePic;
