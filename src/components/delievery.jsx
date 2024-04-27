
import React from 'react';
import Entrega from "../img/entrega.png";
import Pastel2 from "../img/pastel-2.png";
import Baker from "../img/panadero.png";

const Delievery =() =>
{

return (

 <delievery>

<div className="delievery_information">

    <h2> TO EVERY CORNER </h2>
    <h4 className="ready"> We are Ready!</h4>
    <p className="text_delievery">We offer delivery services to ensure your cakes are handled with care and arrive perfectly at your doorstep. Enjoy the convenience of having our delicious treats delivered straight to your home.</p>
    <div className="grid_container_delievery">
    
    <img src={Baker} className="delievery_photos"  width="100px" ></img>
    <img src={Pastel2} className="delievery_photos"  width="100px" ></img>
    <img src={Entrega} className="delievery_photos"  width="100px" ></img>
    
    </div>

    <button> RESERVE</button>
    </div>

 </delievery>


)
}

export default Delievery; 