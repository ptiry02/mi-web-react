import React from "react";
import "../assets/css/Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div
        class="btn-group-vertical"
        role="group"
        aria-label="Basic radio toggle button group"
        id="campos"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-primary" for="btnradio1">
          inicio
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio2">
          experiencia
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio3">
          formación
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio4"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio4">
          habilidades
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio5"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio5">
          contacto
        </label>
      </div>
    );
  }
}

export default Menu;
