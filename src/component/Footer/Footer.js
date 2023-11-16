import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer_box">
    <div className="parent_row">

      <div className="logo_container">
        <div className="footer_logo">
          <Logo />
        </div>

        <p className="footer_about">
          A Message sharing platform that provides a simple method to share
          without getting into any complex process of signing up.
        </p>
      </div>
    </div>

    <div className="parent_row">


      <div className="follow_content">
        <h2>Follow us</h2>

        <div className="img">
          <img className="social-icon" src="/twitter.png" alt="twitter" />
          <img className="social-icon" src="/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>

    <div className="parent_row">

      <div className="poweredby flex flex-end">

        <div>
            <div className="flex flex-column">
                Powered by
                <Logo/>
            </div>

            <p>
            <a className="font tc white" target="_blank"   rel="noreferrer" href="https://www.linkedin.com/in/akash-kumar-sinha-768400251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            -Akash Kumar Sinha
          </a>
            </p>    
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
