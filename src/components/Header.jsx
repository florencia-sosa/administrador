import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Inicio</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/admin' className='nav-link'>Admin</Link>
                </li>
            </ul>

        </nav>

    )
}


export default Header