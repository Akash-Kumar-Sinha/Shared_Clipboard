import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active b" href="/" title='There is no Link right now' aria-current="page" >Home</a>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle b" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item"><a className="nav-link active b" href="https://akash-kumar-sinha.github.io/card_Me/">Card</a></li>
                                    <li className="nav-item"><a className="nav-link active b" href="https://calculator-d1b87.web.app/">Calculator</a></li>
                                </ul>
                            </li>
                        </ul>
                        <span className="d-flex">
                            <input className="form-control me-2 custom-input" title='May not work' type="email" placeholder="Subscribe"/>
                            <button className="btn btn-outline-success custom-btn" type="submit">Subscribe</button>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
