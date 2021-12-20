import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Calendar from '../Assets/Calendar.png';
import Canceled from '../Assets/Canceled.png';
import Delivery from '../Assets/Delivery.png';
import User from '../Assets/user.png'
import SideBarAdmin from './SideBarAdmin';

export default function DashAdmin() {
    return (
        <div>
            <>
                <Header />
                <div className="d-flex">
                    <SideBarAdmin />
                    <div className="container">
                        <h1 className="text-center text-warning pt-5 mb-5">BIENVENIDO, ADMIN</h1>
                        <div className="row row-cols-2">
                            <div className="col">
                                <div className="card mb-4 border border-primary">
                                    <div className="row g-0">
                                        <div className="col-md-3 ">
                                            <img src={User} alt="user_img" className="p-4" />
                                        </div>
                                        <div className="col-md-6 align-self-center">
                                            <h3>Clientes registrados</h3>
                                            <h6>Descripción</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 border border-primary">
                                    <div className="row g-0">
                                        <div className="col-md-3 ">
                                            <img src={Canceled} alt="user_img" className="p-4" />
                                        </div>
                                        <div className="col-md-6 align-self-center">
                                            <h3>Envíos cancelados</h3>
                                            <h6>Descripción</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-2">
                            <div className="col mb-5">
                                <div className="card mb-4 border border-primary">
                                    <div className="row g-0">
                                        <div className="col-md-3 ">
                                            <img src={Delivery} alt="user_img" className="p-4" />
                                        </div>
                                        <div className="col-md-6 align-self-center">
                                            <h3>Envíos entregados</h3>
                                            <h6>Descripción</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 border border-primary">
                                    <div className="row g-0">
                                        <div className="col-md-3 ">
                                            <img src={Calendar} alt="user_img" className="p-4" />
                                        </div>
                                        <div className="col-md-6 align-self-center">
                                            <h3>Envíos programados</h3>
                                            <h6>Descripción</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </div >
    )
}