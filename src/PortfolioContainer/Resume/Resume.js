import React,  {useState } from "react";
import './Resume.css'
import Heading from "../Heading/Heading";
import education from '../../assets/Resume/education-icon.svg';
import workhistory from '../../assets/Resume/work-history.svg';
import programmingskills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import interests from '../../assets/Resume/interests.svg';

function Resume() {
    return (
        <div className='resume-container screen-container fade-in' id="Resume" style={{opacity: 5, transform: "translateY(1)"}}>
            <div className="resume-content">
                <Heading head ='Resume' title = 'My formal Bio Details'/>
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">
                                <a className="bullet" href="#education">
                                    <img className="bullet-logo" src={education} alt="A"/>
                                    <span className="bullet-label">Education</span>
                                </a>
                                <a className="bullet" href="#workhistory">
                                    <img className="bullet-logo" src={workhistory} alt="B"/>
                                    <span className="bullet-label">Work History</span>
                                </a>
                                <a className="bullet" href="#skills">
                                    <img className="bullet-logo" src={programmingskills} alt="C"/>
                                    <span className="bullet-label">Programming Skills</span>
                                </a>
                                <a className="bullet" href="#projects">
                                    <img className="bullet-logo" src={projects} alt="D"/>
                                    <span className="bullet-label">Projects</span>
                                </a>
                                <a className="bullet" href="#interests" >
                                    <img className="bullet-logo" src={interests} alt="E"/>
                                    <span className="bullet-label">Interests</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">
                        <div className="resume-details-carousal" style={{transform: "translateY(0px)"}}>
                            <div className="resume-screen-container" id="education">
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>ASU, Artsakh</span>
                                        <div className="heading-date">2016-2020</div>
                                    </div>
                                    <div className="resume-sub-heading">
                                        <span>Informatics and Applied Mathematics</span>
                                    </div>
                                </div>
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>AITC, Artsakh</span>
                                        <div className="heading-date">2017-2019</div>
                                    </div>
                                    <div className="resume-sub-heading">
                                        <span> 
                                            <ul>
                                                <li>HTML, CSS</li>
                                                <li>C# and ADO.NET</li>
                                                <li>SQL</li>
                                            </ul> 
                                        </span>
                                    </div>
                                </div>
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>TCO Trainings, Armenia</span>
                                        <div className="heading-date">07.2021-01.2022</div>
                                    </div>
                                    <div className="resume-sub-heading">
                                        <span>
                                            <ul>
                                                <li>HTML, Html 5, CSS</li>
                                                <li>JavaScript, jQuery</li>
                                                <li>PHP, MySql</li>
                                                <li>MVC, OOP, VCS</li>
                                                <li>Laravel framework</li>
                                                <li>React Js</li>
                                            </ul> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-screen-container" id="workhistory">
                                <div className="experience-container">
                                    <div className="resume-heading">
                                        <div className="resume-main-heading">
                                            <div className="heading-bullet"></div>
                                            <span>AITC, ARMATH</span>
                                            <div className="heading-date">2017-2020</div>
                                        </div>
                                        <div className="resume-sub-heading">
                                            <span>Trainer</span>
                                        </div>
                                    </div>
                                    <div className="experience-description">
                                        <span className="resume-description-text">
                                            <ul>
                                                <li>Algorithm theories</li>
                                                <li>Mathematics</li>
                                                <li>3D Modeling</li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-screen-container programming-skills-container" id="skills">
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>JavaScript</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>React JS</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>PHP</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>Laravel framework</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '89%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>MySql</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '89%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>MVC, OOP, VCS</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span> jQuery</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>HTML, HTML 5</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '99%'}}></div>
                                    </div>
                                </div>
                                <div className="skill-parent">
                                    <div className="heading-bullet"></div>
                                    <span>CSS</span>
                                    <div className="skill-percentage">
                                        <div className="active-percentage-bar" style={{width: '99%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-screen-container" id="projects">
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>Personal Portfolio Website</span>
                                        <div className="heading-date">2022</div>
                                    </div>
                                    <div className="resume-sub-heading">
                                        <span>Technologies Used: React JS</span>
                                    </div>
                                    <div className="resume-heading-description">
                                        <span>A Personal Portfolio website to showcase all my details and projects at one place.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-screen-container" id="interests">
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>Teaching</span>
                                    </div>
                                    <div className="resume-sub-heading"></div>
                                    <div className="resume-heading-description">
                                        <span>Apart from being a tech enthusiast and a code writer, I also love to teach people what I know simply because I believe in sharing.</span>
                                    </div>
                                </div>
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>Music</span>
                                        <div></div>
                                    </div>
                                    <div className="resume-sub-heading">
                                        <span></span>
                                    </div>
                                    <div className="resume-heading-description">
                                        <span>Listening to relaxing music is something I can never chaneg with any other hobby, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get.</span>
                                    </div>
                                </div>
                                <div className="resume-heading">
                                    <div className="resume-main-heading">
                                        <div className="heading-bullet"></div>
                                        <span>Films</span>
                                        <div></div>
                                    </div>
                                    <div className="resume-sub-heading">
                                        <span></span>
                                    </div>
                                    <div className="resume-heading-description">
                                        <span>I think movies are the best way to take a break from everything. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;