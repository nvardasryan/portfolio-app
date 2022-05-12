import React from "react";
import Heading from "../Heading/Heading";
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='about-me-container screen-container fade-in' id="AboutMe" style={{opacity: 5, transform: "translateY(1)"}}>
            <div className="about-me-parent">
                <Heading head ='About Me' title = 'Why Choose Me?'/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                        Full-stack web developer with the ability to create applications
                        with maximum efficiency.
                        Hardworking, ready to be an asset to the organization.
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>Here are a Few Highlights:</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-blob"></div>
                                <span>Ability to learn quickly</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-blob"></div>
                                <span>Written communication skills</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-blob"></div>
                                <span>Ability to work in a team</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-blob"></div>
                                <span>Sense of responsibility</span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-blob"></div>
                                <span>Problem solving </span>
                            </div>
                            <div className="highlight">
                                <div className="highlight-blob"></div>
                                <span>Accountability</span>
                            </div>
                        </div>
                        <div className="about-me-options">
                            <button className='btn primary-btn'> 
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href='nvard.pdf' download='nvard.pdf'>
                                <button className='btn highlighted-btn'> Get Resume </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;