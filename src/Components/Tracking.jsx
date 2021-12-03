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
                    <p>Ingrese su número de guía</p>
                </div>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-xl-4">
                            <div class="input-group mb-3 align-item-center">
                                <input type="text" class="form-control" placeholder="Número de guía" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button type="button" class="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5 pt-5">
                <div class="row align-items-start gx-5">
                    <div class="col">
                        < img src={Tracking1} alt="img_1" />
                    </div>
                    <div class="col">
                        <img src={Tracking2} alt="img_2" />
                    </div>
                    <div class="col">
                        <img src={Tracking3} alt="img_3" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

