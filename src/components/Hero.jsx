
import React from 'react';
import Cake from "../img/cake_hero.png";
import { Link } from "react-router-dom";


const Hero =() =>
{

return (

    <hero>

        <div className="containers_hero">


        <div className="main_title">

            <h1>Crafting personalized sweetness</h1>
            <p>Experience the joy of personalized sweetness with our handcrafted cakes, designed just for you!</p>

          <Link to="/contact">
            <button>CONTACT</button>
            </Link>


        </div>

        <div className="image_hero">
        <img className="cake_img" src={Cake} alt="cake" width="400px"/>



        </div>


        </div>
    </hero>


)
}

export default Hero; 