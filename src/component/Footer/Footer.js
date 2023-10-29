import React from "react";
import './Footer.css'
import Logo from "../Logo/Logo";

const Footer = () => {
    return(
        <footer className="shadow footer_box">

                <div className="shadow row logo_container">
                    
                    <div className="footer_logo">
                        <Logo/>
                    </div>

                    <p className="shadow footer_about">
                    A Message sharing platform that provides a simple method to share without getting into any complex process of signing up.
                    </p>

                </div>

                <div className="shadow row follow_content">
                    
                    <h2>
                        Follow us
                    </h2>

                    <div className="img flex">
                        <img className="twitter" src="/twitter.png" alt="twitter" width="40" />
                        <img className="linkedin" src="/linkedin.png" alt="linkedin" width="40" />

                    </div>

                </div>

                <div className="shadow row poweredby flex flex-end">

                    <div>
                        <div className="flex flex-column">
                            Powered by
                            <Logo/>
                        </div>

                        <p>-Akash Kumar Sinha</p>    
                    </div>
                    
                </div>
                
        </footer>
    )
}

export default Footer;