import React, { Component } from 'react'
export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning">Deprisa</a>
                    <button className="navbar-toggler bg-warning " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Rastree su envio</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-light">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
