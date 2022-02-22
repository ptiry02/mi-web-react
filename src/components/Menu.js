import React, { Component } from "react";
import "../assets/css/Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true,
    };

    this.handleChange = (event) => {
      const target = event.target;
      const value = target.id;

      this.setState({
        selected: !this.state.selected,
      });
      console.log(value);
    };
  }

  render() {
    return (
      <div
        className="btn-group-vertical"
        id="campos"
        onChange={this.handleChange}
      >
        <label className="btn btn-outline-primary" id="btnradio1">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            defaultChecked
          />
          inicio
        </label>

        <label className="btn btn-outline-primary" id="btnradio2">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
          />
          experiencia
        </label>

        <label className="btn btn-outline-primary" id="btnradio3">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
          />
          formación
        </label>

        <label className="btn btn-outline-primary" id="btnradio4">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio4"
          />
          habilidades
        </label>

        <label className="btn btn-outline-primary" id="btnradio5">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio5"
          />
          contacto
        </label>
      </div>
    );
  }
}

export default Menu;
