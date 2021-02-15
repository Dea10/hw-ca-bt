import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Conceptos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/recorridos">Recorridos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/abb">ABB</Link>
            </li>
        </ul>
    );
}

export default Navbar;