import React, { Image } from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src="https://www.omniscape.com/wp-content/uploads/2019/06/logo-white-cropped.png" alt="" />
            <button>Login</button>
        </div>
    )
}

export default Header;
