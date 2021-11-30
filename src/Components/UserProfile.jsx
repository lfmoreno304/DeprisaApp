import React from 'react';
import Header from './Header';
import Footer from './Footer';

function UserProfile(props) {
    return (
        <>
        <Header />
            <div className="container">
                <h1 className="text-center text-warning pt-5">REGISTRO</h1>
                <input type="text" placeholder="Nombre Completo" />
                <input type="text" placeholder="Identificación" />
                <input type="text" placeholder="Correo Electrónico" />
                <input type="text" placeholder="Contraseña" />
                <input type="text" placeholder="Dirección" />
                <input type="text" placeholder="Ciudad" />
                <button className ="btn btn-primary" onClick="">Actualizar Datos</button>
                <button className ="btn btn-primary" onClick="">Eliminar Cuenta</button>
            </div>
        <Footer />
        </>
    )
}

export default UserProfile;