import React from 'react';
import './Profile.css'
function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/nvard-asryan-24b6a21bb'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://twitter.com/nvardasryan'>
                                <i className='fa fa-twitter-square'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <div className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Nvard</span>
                        </div>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end 
                                operations.
                            </span>
                        </span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'> 
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href='nvard.pdf' download='nvard.pdf'>
                                <button className='btn highlighted-btn'> Get Resume </button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>
                </div>
            </div>
    );
}

export default Profile;