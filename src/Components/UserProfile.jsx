import React from 'react';
import Header from './Header';
import Footer from './Footer';

function UserProfile(props) {
    return (
        <>
        <Header />
            <div className="container">
                <h1 className="text-center text-warning pt-5">MI PERFIL</h1>
                <div className="row mb-3">
                    <div className="col-md-6 pt-2">
                        <input className="form-control mb-3" type="text" placeholder="Nombre Completo" disabled/>
                        <input className="form-control mb-3" type="text" placeholder="Identificación" disabled/>
                        <input className="form-control mb-3" type="text" placeholder="Correo Electrónico" />
                        <button className ="btn btn-primary mb-3" onClick="">Actualizar Datos</button>
                    </div>
                    <div className="col-md-6 pt-2">    
                        <input className="form-control mb-3" type="text" placeholder="Contraseña" />
                        <input className="form-control mb-3" type="text" placeholder="Dirección" />
                        <input className="form-control mb-3" type="text" placeholder="Ciudad" />                        
                        <button className ="btn btn-primary" onClick="">Eliminar Cuenta</button>
                    </div>
                </div>               
            </div>
        <Footer />            
        </>
    )
}

export default UserProfile;