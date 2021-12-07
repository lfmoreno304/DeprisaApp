import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeSideBar from './EmployeeSideBar';

function ShipCompanyForm() {
    return(
        <>
        <Header />
            <div className="d-flex">
                <EmployeeSideBar />
            <div className="container mb-5">
            <h1 className="text-center text-warning pt-5 mb-4">FORMATO PARA RECOGIDA DE PAQUETES</h1>
            <div className="">
            <label className="form-label">Mensajero Asignado</label>
            <input className="form-control mb-3" type="text" placeholder="Mensajero" disabled/>        
            <label className="form-label">Dimensiones del paquete</label>
            <input className="form-control mb-3" type="text" placeholder="Ancho x Alto x Largo" />
            <label className="form-label">Peso final (Kg)</label>
            <input className="form-control mb-3" type="text" placeholder="Kilogramos" />
            <label className="form-label">Valor declarado del producto a envíar</label>
            <input className="form-control mb-3" type="text" placeholder="$" />
            <label className="form-label">Valor de seguro de envío</label>
            <input className="form-control mb-3" type="text" placeholder="$" />
            <label className="form-label">Costo de envío</label>
            <input className="form-control mb-3" type="text" placeholder="$" />
                </div>
                <div className="row row-cols-2 ">
                    <button className ="btn btn-primary mb-3" onClick="">Envíar Formato</button>
                    <button className ="btn btn-secondary mb-3" onClick="">Cancelar</button>
                </div>
            </div>
            </div>
        <Footer />
        </>
        
    )
}

export default ShipCompanyForm;