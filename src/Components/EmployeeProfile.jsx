import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeSideBar from './EmployeeSideBar';

function EmployeeProfile() {
    return (
        <>
        <Header />
        <div className="d-flex">
            <EmployeeSideBar />
                <div className="container">
                    <h1 className="text-center text-warning pt-5">MI PERFIL</h1>
                    <div className="row mb-3">
                        <div className="col-md-5 pl-5 pt-2">
                            <label class="form-label">Nombre Completo</label>
                            <input className="form-control mb-3" type="text" placeholder="Nombre Completo" disabled />
                            <label class="form-label">Identificación</label>
                            <input className="form-control mb-3" type="text" placeholder="Identificación" disabled />
                            <label class="form-label">Correo Electrónico</label>
                            <input className="form-control mb-3" type="text" placeholder="Correo Electrónico" disabled />                        
                        </div>
                        <div className="col-md-5 m-auto pt-2">
                            <label class="form-label">Contraseña</label>    
                            <input className="form-control mb-3" type="text" placeholder="Contraseña" disabled />
                            <label class="form-label">Direccion</label> 
                            <input className="form-control mb-3" type="text" placeholder="Dirección" disabled />
                            <label class="form-label">Ciudad</label>
                            <input className="form-control mb-3" type="text" placeholder="Ciudad" disabled />
                        </div>
                    </div>               
                </div>
            </div>    
        <Footer />            
        </>
    )
}

export default EmployeeProfile;