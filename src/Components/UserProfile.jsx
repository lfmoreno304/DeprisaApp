import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

function UserProfile() {
    return (
        <>
        <Header />
            <div className="d-flex">
            <SideBar />
            <div className="container">
                <h1 className="text-center text-warning pt-5">MI PERFIL</h1>
                    <div className="row mb-3">
                        <div className="col-md-5 pt-2 ">
                            <label class="form-label">Nombre Completo</label>
                            <input className="form-control mb-3" type="text" placeholder="Nombre Completo" disabled/>
                            <label class="form-label">Identificación</label>
                            <input className="form-control mb-3" type="text" placeholder="Identificación" disabled/>
                            <label class="form-label">Correo Electrónico</label>
                            <input className="form-control mb-3" type="text" placeholder="Correo Electrónico" />
                            <button className ="btn btn-primary mb-3" onClick="">Actualizar Datos</button>
                        </div>
                        <div className="col-md-5 pt-2">
                            <label class="form-label">Contraseña</label>    
                            <input className="form-control mb-3" type="text" placeholder="Contraseña" />
                            <label class="form-label">Dirección</label>
                            <input className="form-control mb-3" type="text" placeholder="Dirección" />
                            <label class="form-label">Ciudad</label>
                            <input className="form-control mb-3" type="text" placeholder="Ciudad" />                        
                            <button className ="btn btn-primary" onClick="">Eliminar Cuenta</button>
                        </div>
                    </div>               
                </div>
            </div>  
        <Footer />            
        </>
    )
}

export default UserProfile;