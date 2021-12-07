import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <>

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-success sidebar collapse">
                <div className="position-sticky pt-3">

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                        <span>Nombre de usuario</span>
                    </h6>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-white">
                        <span>Tipo de usuario</span>
                    </h6>
                    <hr className="" />
                    <ul className="nav flex-column">
                        <li className="nav-item text-center">
                            <Link to="/mydeliveries">
                            <button className="btn btn-secondaty text-white" aria-current="page" >
                                Mis envios
                            </button>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to="/usertracking">
                            <button className="btn btn-secondaty text-white" aria-current="page" >
                                Rastrear envios
                            </button>
                            </Link>
                        </li>
                        <li className="nav-item text-center ">
                            <Link to="/userform">
                            <button className="btn btn-secondaty text-white" aria-current="page" >
                                Programar recogida de paquetes
                            </button>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>


        </>
    )
}
