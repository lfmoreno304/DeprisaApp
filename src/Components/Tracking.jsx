import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Tracking1 from '../Assets/Tracking1.png';
import Tracking2 from '../Assets/Tracking2.png';
import Tracking3 from '../Assets/Tracking3.png';

export default function Tracking() {
    return (
        <div>
            <Header />
            <div className="container pb-3 pt-4">
                <div className="">
                    <h1 className="text-center text-warning">RASTREO DE ENVÍOS</h1>
                    <p>Realice aquí el seguimiento de sus envíos nacionales</p>
                    <p><em>Ingrese su número de guía</em></p>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-md-auto pt-2">
                            <input type="text" className="form-control" placeholder="Número de guía" aria-label="Recipient's username" aria-describedby="basic-addon2" /> 
                        </div>
                        <div className="col-md-5 pt-2">
                        <button type="button" className="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5 pt-5">
                <div className="row align-items-start gx-5">
                    <div className="col">
                        < img src={Tracking1} alt="img_1" />
                    </div>
                    <div className="col">
                        <img src={Tracking2} alt="img_2" />
                    </div>
                    <div className="col">
                        <img src={Tracking3} alt="img_3" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

