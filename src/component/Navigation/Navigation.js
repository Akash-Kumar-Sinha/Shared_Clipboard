import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" title='There is no Link right now' aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" title='There is no Link right now' aria-current="page" href="#">MyPen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" title='There is no Link right now' aria-current="page" href="#">Porfolio</a>
                            </li>
                        </ul>
                        <span className="d-flex">
                            <input className="form-control me-2 custom-input" title='May not work' type="search" placeholder="Subscribe" aria-label="Search" />
                            <button className="btn btn-outline-success custom-btn" type="submit">Subscribe</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
