import React from 'react'

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
                        <li className="nav-item">
                            <button className="btn btn-secondaty text-white" aria-current="page" >
                                Mis envios
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-secondaty text-white" aria-current="page" >
                                Rastrear envios
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-secondaty text-white" aria-current="page" >
                                Programas paquetes
                            </button>
                        </li>
                    </ul>

                </div>
            </nav>


        </>
    )
}
