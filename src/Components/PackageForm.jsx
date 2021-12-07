import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import axios from 'axios';

export default function PackageForm() {
    
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {
        const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json?$$app_token=AXyDJ1ulg4RCGgyNVEL4ksWeM";
        
        axios.get(url)
        .then(function (res) {
            setDepartamentos(res.data);
            console.log("Ok", res.data)
            
        })
        .catch(function (err) {
            console.log("Error", err);
        })
    }, []);

    return (
    <>
        <Header/>
        <div className="d-flex">
                <SideBar/>
                <div className="container">
                    <h1 className="text-center text-warning pt-5 mb-5">FORMATO PARA LA RECOGIDA DE PAQUETES</h1>
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Dia en el que tenga disponibilidad</label>
                            </div>
                            <div className="col">
                                <input className="form-control" type="date" placeholder="DD/MM/YY"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Franja horaria disponible</label>
                            </div>
                            <div className="col">
                                <select className="form-control">
                                    <option value="am">
                                        Mañana
                                    </option>
                                    <option value="pm">
                                        Tarde
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Dimesion del paquete (cm)</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Ancho x Alto x Largo"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Peso aproximado (kg)</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Peso (kg)"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Departamento</label>
                            </div>
                            <div className="col">
                                <select className="form-control">
                                    {departamentos.map(departamento =>(
                                        <option key={departamento.c_digo_dane_del_departamento} 
                                        value={departamento.c_digo_dane_del_departamento}>{departamento.departamento}
                                        </option>)
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Ciudad</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Ciudad remitente"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Direccion</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Direccion del remitente"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Numero de documento</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="0-9"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Nombre completo</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Nombre remitente"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Departmento</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Depertamento destinatario"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Ciudad</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Ciudad destinatario"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Direccion</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Direccion destinatario"></input>
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <div className="col">
                                <label className="form-label">Nombre completo del destinatario</label>
                            </div>
                            <div className="col">
                                <input className="form-control" placeholder="Nombre destinatario"></input>
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-2 mx-auto pb-3 pt-4  mb-3">
                            <button type="submit" className="btn btn-primary ">Enviar formato</button>
                        </div>
                    </form>
                </div>
        </div>
        <Footer/>
    </>
    )
}
