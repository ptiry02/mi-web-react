import React, { Component } from "react";
import "../assets/css/MainCard.css";
import profilePic from "../assets/images/yo_en_moto.jpg";

class MainCard extends Component {
  render() {
    return (
      <div className="card" id="inicio">
        <div id="photo">
          <img src={profilePic} alt="Foto perfil" id="profilePic" />
        </div>
        <div className="box">
          <h1 className="text-center pt-3">PAUL TIRY</h1>
          <h4 className="text-center">Mecánico y programador web</h4>
        </div>
        <div className="info">
          <p className="text-center">
            <i className="fas fa-envelope"> tirypaul@gmail.com</i>
            <i className="fas fa-phone-square"> +34 679 704 916</i>
          </p>
        </div>
        <div className="icons text-center mt-3">
          <i className="fab fa-linkedin fa-lg"></i>
          <i className="fab fa-facebook-square fa-lg"></i>
        </div>
      </div>
    );
  }
}

export default MainCard;
