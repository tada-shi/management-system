import React, {useState} from 'react';
import logo from './logo.png';
import logo2 from './logo2.png';
import { Link } from 'react-router-dom';
import './Header.css';
import './Sidebar.css';
import {AiOutlineClose} from 'react-icons/ai';
import {sidebarData} from './Sidebar';

function Header() {
    const [sidebars, setsidebars] = useState(false);

    const showSidebars = () => setsidebars(!sidebars);
    return (
        <>
            <div className="header">
                <div className="header__leftCorner sticky"
                >
                    <img 
                    onClick={showSidebars}
                    src={logo2} alt="" />
                </div>
                <nav className={sidebars?"nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebars}>
                    <li className="nav-menu-toggle">
                        <Link to='#'>
                            <AiOutlineClose style={{color: '#000', margin: '25px 0px 0px 90%'}}/>
                        </Link>
                    </li>
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}     
                    </ul>
                </nav>
            <Link to="/">
            <div className="header__logo">
                <img src={logo} alt="" />
                <div className="header__border"></div>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Header
