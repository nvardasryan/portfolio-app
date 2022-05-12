import React  from "react";
import './Footer.css';

function Footer() {
  return (
        <div className="footer-distributed">
            <div className="footer-left">
                    <span>NVARD</span>
                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>
                    <a href="#AboutMe">About Me</a>
                    <a href="#Resume">Resume</a>
                    <a href="#ContactMe">Contact Me</a>
                </p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Yerevan, Armenia</span></p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p><a href='tel:+374 97 300 329'>+374 97 300 329</a></p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:nvard.asryan@gmail.com">nvard.asryan@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-icons">
                    <a href="https://twitter.com/nvardasryan"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/nvard-asryan-24b6a21bb"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/nvardasryan/my-react-portfolio-1"><i className="fa fa-github"></i></a>
                </div>
            </div>
        </div>
  );
}

export default Footer;