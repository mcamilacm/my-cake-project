
import React from 'react';
import { Link } from "react-router-dom";
import LogoImage from "../img/cakelogo.png";
import Mail from "../img/mail.png";

const Navigation =() =>
{

return (

<nav>
<div className="nav_container">  
<Link to ="/">
<img src={LogoImage} alt="Logo" width="200px"/>
</Link>
<div className="titles_nav">
    <Link to ="/" className="home_nav">HOME </Link>
    <Link to ="/contact" className="contact_nav">CONTACT</Link>
    </div>
    <Link className="link_mail" to="/contact">
    <img className="mail_mobile" src={Mail} alt="mail" width="50px"/>
    </Link>

</div>
</nav>
)
}

export default Navigation; 