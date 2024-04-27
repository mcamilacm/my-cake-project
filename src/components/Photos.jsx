
import React from 'react';
import Cake1 from "../img/cake1.jpg";
import Cake2 from "../img/cake2.jpg";
import Cake3 from "../img/cake3.jpg";
import Cake4 from "../img/cake4.jpg";
import Cake5 from "../img/cake5.jpg";
import Cake6 from "../img/cake6.jpg";

const Photos =() =>
{

return (

 <photos>

    <div className="photos_information">
    <h2>CHOOSE YOUR FAVORITE!</h2>
    <p className="text_photos">Explore our array of personalized cakes and select your ultimate favorite for an unforgettable treat!</p>

    <div className="container_grid_photos">

        <img src={Cake1} className="photos_container" ></img>
        <img src={Cake4} className="photos_container" ></img>
        <img src={Cake5} className="photos_container" ></img>
        <img src={Cake2} className="photos_container" ></img>
        <img src={Cake6} className="photos_container" ></img>
        <img src={Cake3} className="photos_container"></img>
        </div>



    </div>

 </photos>


)
}

export default Photos; 