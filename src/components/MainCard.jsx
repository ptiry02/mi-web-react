import React from "react";
import styled from "styled-components";
import profilePic from "../assets/images/yo_en_moto.jpg";

const MainCard = () => {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    font-size: 1rem;
    background-color: #a6a59c;
    min-width: 350px;
    box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;

    h1,
    h4 {
      align-items: center;
      text-align: center;
    }

    .info {
      display: flex;
      background-color: #489991;
      border-radius: 10px;
      box-shadow: 0px 0px 3px black, 2px 2px 6px darkgray;
      width: 350px;
      padding: 0.7rem 0.7rem;
      justify-content: center;
      column-gap: 0.9rem;
    }

    .icons {
      display: flex;
      justify-content: center;
      column-gap: 0.8rem;
      margin-top: 0.6rem;
    }

    #photo {
      height: 200px;
      width: fit-content;
      margin: 0px auto;
      overflow: hidden;
      border-radius: 99999px;
      box-shadow: 0px 0px 3px black, 2px 2px 6px darkgray;
    }
    #photo img {
      height: 200px;
    }
  `;
  return (
    <Card>
      <div id="photo">
        <img src={profilePic} alt="Foto perfil" id="profilePic" />
      </div>
      <div className="box">
        <h1>PAUL TIRY</h1>
        <h4>Mecánico y programador web</h4>
      </div>
      <div className="info">
        <i className="fas fa-envelope"> tirypaul@gmail.com</i>
        <i className="fas fa-phone-square"> +34 679 704 916</i>
      </div>
      <div className="icons">
        <i className="fab fa-linkedin fa-lg"></i>
        <i className="fab fa-facebook-square fa-lg"></i>
      </div>
    </Card>
  );
};

export default MainCard;
