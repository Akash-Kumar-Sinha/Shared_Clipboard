import React from "react";
import './Footer.css'
import Logo from "../Logo/Logo";

const Footer = () =>{
    return(
        <footer className="footer_box flex">

            <div className="parent flex">
            <div className="left">

                <div className="container">
                    
                    <div className="footer_logo">
                        <Logo/>
                    </div>

                    <p className="footer_about">
                    A Message sharing platform that provides a simple method to share without getting into any complex process of signing up.
                    </p>
                </div>

                <div className="follow_content">
                
                    <h2>
                        Follow us
                    </h2>

                    <div className="flex justify-between-ns">
                        <img className="twitter" src="/twitter.png" alt="twitter" width="40" />
                        <img className="linkedin" src="/linkedin.png" alt="linkedin" width="40" />

                    </div>

                </div>
            </div>

                <div className="poweredby flex flex-end">
                    <div>
                        <p flex flex-column>
                            Powered by
                            <Logo/>
                        </p>

                        <p>-Akash Kumar Sinha</p>    
                    </div>
                    
                </div>
                
            </div>

        </footer>
    )
}

export default Footer;