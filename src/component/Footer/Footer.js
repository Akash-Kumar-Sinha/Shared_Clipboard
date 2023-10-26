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
                    A Message sharing platform. It's provides a simple method to share without getting into any complex process of signup.
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

const aFooter = () => {

    return(

    <footer className="footer_box flex">

    <div className="left">
        <div className="container">

            <div className="footer_logo">
                <Logo/>
            </div>
            <p className="footer_about">
                A Message sharing platform without login. It's provide a simple method to sahre without getting into any complex process
            </p>

        </div>
        
        <div>
            <h3>
                Follow us
            </h3>

            <img className="twitter" src="/twitter.png" alt="twitter" width="30" />
            <img className="linkedin" src="/linkedin.png" alt="linkedin" width="25" />
            
            </div>
    </div>
        
    <div className="columns flex">
        <div className="middle">

            <p>
            <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>FAQs</li>
                <li>Circular</li>
            </ul>
            </p>

        </div>
        
        <div className="right">
            <p>
            <ul className="list">
                <li>Need Help</li>
                <li>Credits</li>
                <li>Partner</li>
            </ul>
            </p>
            <p flex flex-column>
            Powered by
            <Logo/>
        </p>
        </div>

        
    </div>

    </footer>
    
    )
}

export default Footer;