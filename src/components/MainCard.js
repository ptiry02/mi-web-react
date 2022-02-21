import React, { Component } from "react";
import "../assets/css/MainCard.css";
import profilePic from "../assets/images/yo_en_moto.jpg";

class MainCard extends Component {
  render() {
    return (
      <div class="card" id="inicio">
        <div id="photo">
          <img src={profilePic} alt="Foto perfil" id="profilePic" />
        </div>
        <div class="box">
          <h1 class="text-center pt-3">PAUL TIRY</h1>
          <h4 class="text-center">Mecánico y programador web</h4>
        </div>
        <div class="info">
          <p class="text-center">
            <i class="fas fa-envelope"> tirypaul@gmail.com</i>
            <i class="fas fa-phone-square"> +34 679 704 916</i>
          </p>
        </div>
        <div class="icons text-center mt-3">
          <i class="fab fa-linkedin fa-lg"></i>
          <i class="fab fa-facebook-square fa-lg"></i>
        </div>
      </div>
    );
  }
}

export default MainCard;
