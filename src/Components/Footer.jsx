import React, { Component } from 'react'
import './../Styles/Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <footer id="pie" className="bg-ligth text-dark ">
                <div className="container">
                    <nav className="row">
                        <ul className="col list-unstyled">
                            <li className="font-weight-bold">Siguenos en redes</li>
                            <li><a href="#" className="text-reset">Twitter</a></li>
                            <li><a href="#" className="text-reset">Facebook</a></li>
                            <li><a href="#" className="text-reset">Instagram</a></li>
                        </ul>
                        <ul className="col-3 list-unstyled">
                            <li className="font-weight-bold">Contacto</li>
                            <li>Tel: 3333</li>
                            <li>Calle 1 # 23</li>
                            <li>Bogota, Colombia</li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}
