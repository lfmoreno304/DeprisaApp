import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ShipCompanyForm(props) {
    return(
        <>
        <Header />
            <div className="container mb-5">
            <h1 className="text-center text-warning pt-5 mb-4">FORMATO PARA RECOGIDA DE PAQUETES</h1>
                <div className="">
                    <div className="form-group form-inline">    
                        <label className="col-form-label col-md-auto" for="courier">Mensajero Asignado</label>
                        <input className="form-control col-lg-4" type="text" id="courier" placeholder="Mensajero" disabled/>
                    </div>
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
        <Footer />
        </>
        
    )
}

export default ShipCompanyForm;