import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="container pb-3 pt-4">
                    <h1 className="text-center text-warning">
                        INICIAR SESIÓN
                    </h1>
                </div>
                <div className="container-sm pb-5 pt-2">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" />
                        </div>
                        <div className="mb-3">
                            <Link to="/register">No tienes cuenta? Regístrese aquí!</Link>
                        </div>
                        <div className="mx-auto pb-3 pt-4">
                            <button type="submit" clasNames="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
