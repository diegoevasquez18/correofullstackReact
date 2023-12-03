import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div class="holder">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contactanos">Contactanos</Link></li>
            <li><Link to="/ecofriendly">Ecofriendly</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
    </div>
    )
}

export default Nav;