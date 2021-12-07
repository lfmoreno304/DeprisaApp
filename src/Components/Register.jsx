import React from 'react';
import Footer from './Footer';
import Header from './Header';


export default function Register() {
    return (
        <div>
            <Header />
            <h1 className="text-center text-warning pt-5">REGISTRO</h1>
            <form>
                <div className="form-row">
                    <div className="col pb-3 pt-4 px-5">
                        <input type="text" className="form-control" placeholder="Nombre completo" />
                    </div>
                    <div className="col pb-3 pt-4 px-5">
                        <input type="text" className="form-control" placeholder="Identificación" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col pb-3 pt-4 px-5">
                        <input type="text" className="form-control" placeholder="Correo electrónico" />
                    </div>
                    <div className="col pb-3 pt-4 px-5">
                        <input type="text" className="form-control" placeholder="Contraseña" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col pb-3 pt-4 px-5">
                        <input type="text" className="form-control" placeholder="Dirección" />
                    </div>
                    <div className="col pb-3 pt-4 px-5">
                        <input type="text" className="form-control" placeholder="Ciudad" />
                    </div>
                </div>
            </form>
            <div className="col text-center pb-3 pt-4">
                <button className="btn btn-primary">Registrarse</button>
            </div>
            <Footer />
        </div>
    )
}