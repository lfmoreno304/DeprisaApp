import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

export default function UserTracking() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <SideBar/>
                <div className="container pb-1 pt-4"> 
                    <h1 className="text-center text-warning pt-5">RASTREAR MI ENVÍO</h1>
                    <p className="col text-center">Realice el seguimiento de sus envios Nacionales</p>
                    <p className="col text-center">Ingrese su número de Guía</p>   

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-8">
                               <input className="form-control text-left" placeholder="N° de Seguimiento"></input>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-primary col-lg-4" onClick="">Consultar </button>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>    
        <Footer />
        </>
    )    
}
