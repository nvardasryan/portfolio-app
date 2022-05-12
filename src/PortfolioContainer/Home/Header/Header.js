import React from "react";
import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className="header-parent">
                <div className="header-hamburger">

                </div>
                <div className="header-logo">
                    <span>NVARD</span>
                </div>
                <div className="header-options">
                    <div className="header-option header-option-seperator ">
                        <span><a href="#">Home</a></span>
                    </div>
                    <div className="header-option header-option-seperator ">
                        <span><a href="#AboutMe">AboutMe</a></span>
                    </div>
                    <div className="header-option header-option-seperator ">
                        <span><a href="#Resume">Resume</a></span>
                    </div>
                    <div className="header-option header-option-seperator">
                        <span><a href="#ContactMe">ContactMe</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;