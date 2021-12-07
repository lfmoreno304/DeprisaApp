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
                <div className="container"> 
                    <h1 className="text-center text-warning pt-5">RASTREAR MI ENVÍO</h1>
                    <p className="col text-center">Realice el seguimiento de sus envios Nacionales</p>
                    <p className="col text-center">Ingrese su número de Guía</p>   

                    <div className="container">             
                        <div className="row mb-3">
                            <div className="col">
                            <input className="form-control text-left" placeholder="N° de Seguimiento"></input>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary col-lg-3" onClick="">Consultar </button>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>    
        <Footer />
        </>
    )    
}
