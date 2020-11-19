import React, { Fragment, useState } from 'react';
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import grdev from './grdev.png';
import {
    NavLink,
    Link
} from 'react-router-dom';

export default function Navbar() {
    const [ showMenu, setShowMenu ] = useState(false);
    let menuItems;
    let menuMask;

    if(showMenu){
        menuItems = 
            <span className="menuItems">
                <img className='logoItem' src={grdev} alt="company logo" />
                <span>
                    <NavLink className="navBarItemSm" to='/'>Home</NavLink>
                </span>
                <span>
                    {/* <a className="navBarItemSm" href="#about">About</a> */}
                    <NavLink className="navBarItemSm" to='/about'>About</NavLink>
                </span>
                <span>
                    {/* <a className="navBarItemSm" href="#projects">Projects</a> */}
                    <NavLink className="navBarItemSm" to='/projects'>Projects</NavLink>
                </span>
                <span>
                    {/* <a className="navBarItemSm" href="#products">Products</a> */}
                    <NavLink className="navBarItemSm" to='/products'>Products</NavLink>
                </span>
                <span>
                    {/* <a className="navBarItemSm" href="#contact Us">Contact Us</a> */}
                    <Link className="navBarItemSm" to='/contact'>Contact us</Link>
                </span>
            </span>

        menuMask = 
        <span className="menuMask" onClick={() => setShowMenu(false)} >

        </span>
    }
    
    return (
        <span>
            <Media queries={{
                small: "(max-width: 425px)",
                medium: "(min-width: 426px) and (max-width: 699px)",
                secondMed: "(min-width: 700px) and (max-width: 1023px)",
                large: "(min-width: 1024px) and (max-width: 1439px)",
                xxl: "(min-width: 1440px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && 
                            <nav className="navbarMenuContainer">
                                <div className="navbarMenu">
                                    <FontAwesomeIcon 
                                        icon={faBars}
                                        onClick={() => setShowMenu(!showMenu)}
                                    />
                                </div>
                                { menuMask }
                                { menuItems }
                            </nav>
                        }
                        {matches.medium &&
                            <nav className="navBarMedContainer">
                                <NavLink className="navbarMed" to="/">Home</NavLink>
                                <NavLink className="navbarMed" to="/about">About</NavLink>
                                <NavLink className="navbarMed" to="/projects">Projects</NavLink>
                                <NavLink className="navbarMed" to="/products">Products</NavLink>
                                <Link className="navbarMed" to="/contact">Contact Us</Link>
                                {/* <span><a className="navBarMed">About</a></span>
                                <span><a className="navBarMed">Projects</a></span>
                                <span><a className="navBarMed">Products</a></span>
                                <span><a className="navBarMed">Contact Us</a></span> */}
                            </nav>
                        }
                        {matches.secondMed &&
                            <nav className="navBarSecMedContainer">
                                <NavLink className="navbarSecMed" to="/">Home</NavLink>
                                <NavLink className="navbarSecMed" to="/about">About</NavLink>
                                <NavLink className="navbarSecMed" to="/projects">Projects</NavLink>
                                <NavLink className="navbarSecMed" to="/products">Products</NavLink>
                                <Link className="navbarSecMed" to="/contact">Contact Us</Link>
                                {/* <span><a className="navBarSecMed">About</a></span>
                                <span><a className="navBarSecMed">Projects</a></span>
                                <span><a className="navBarSecMed">Products</a></span>
                                <span><a className="navBarSecMed">Contact Us</a></span> */}
                            </nav>
                        }
                        {matches.large &&
                            <nav className="navBarLgContainer">
                                <NavLink className="navbarLg" to="/">Home</NavLink>
                                <NavLink className="navbarLg" to="/about">About</NavLink>
                                <NavLink className="navbarLg" to="/projects">Projects</NavLink>
                                <NavLink className="navbarLg" to="/products">Products</NavLink>
                                <Link className="navbarLg" to="/contact">Contact Us</Link>
                                {/* <span><a className="navBarLg">About</a></span>
                                <span><a className="navBarLg">Projects</a></span>
                                <span><a className="navBarLg">Products</a></span>
                                <span><a className="navBarLg">Contact Us</a></span> */}
                            </nav>
                        }
                        {matches.xxl &&
                            <nav className="navBarXXLContainer">
                                <NavLink className="navbarXXL" to="/">Home</NavLink>
                                <NavLink className="navbarXXL" to="/about">About</NavLink>
                                <NavLink className="navbarXXL" to="/projects">Projects</NavLink>
                                <NavLink className="navbarXXL" to="/products">Products</NavLink>
                                <Link className="navbarXXL" to="/contact">Contact Us</Link>
                                {/* <span><a className="navBarXXL">About</a></span>
                                <span><a className="navBarXXL">Projects</a></span>
                                <span><a className="navBarXXL">Products</a></span>
                                <span><a className="navBarXXL">Contact Us</a></span> */}
                            </nav>
                        }
                    </Fragment>
                )}
            </Media>
        </span>
    );
}
