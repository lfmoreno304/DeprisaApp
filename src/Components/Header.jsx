import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-warning">Deprisa</Link>
                <button className="navbar-toggler bg-warning " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"className="nav-link active text-white" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tracking"className="nav-link text-white">Rastree su envío</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to="/login">
                        <button className="btn btn-light">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
