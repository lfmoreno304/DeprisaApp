import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Correo electrónico" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="password" placeholder="Contraseña" />
                        </div>
                        <div class="mb-3">
                            <a href="#">No tienes cuenta? Regístrese aquí!</a>
                        </div>
                        <div className="mx-auto pb-3 pt-4">
                            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
