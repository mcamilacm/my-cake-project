import React from "react";
import Pistachio from "../img/pistachio.png";
import Chocolate from "../img/chocolate.png";
import Cherries from "../img/cherries.png";
import Vanilla from "../img/vanilla.png";

const Ingredientes = () => {
  return (
    <ingredients>
      <div className="ingredients_section">
        <h2> INGREDIENTS</h2>
        <p>choose your favorite ingredient for your cake!</p>

        <div className="container_grid">
          <div className="icon_ingredient">
            <img
              className="ingredients_icon"
              src={Vanilla}
              alt="cake"
              width="100px"
            />
            <p className="icon_text">Vainilla</p>
          </div>

          <div className="icon_ingredient">
            <img
              className="ingredients_icon"
              src={Chocolate}
              alt="cake"
              width="100px"
            />
                        <p className="icon_text">Chocolate</p>
          </div>

          <div className="icon_ingredient">
            <img
              className="ingredients_icon"
              src={Cherries}
              alt="cake"
              width="100px"
            />
                        <p className="icon_text">Cherry</p>
          </div>

          <div className="icon_ingredient">
            <img
              className="ingredients_icon"
              src={Pistachio}
              alt="cake"
              width="100px"
            />
                        <p className="icon_text">Pistachio</p>
          </div>
        </div>
      </div>
    </ingredients>
  );
};

export default Ingredientes;
