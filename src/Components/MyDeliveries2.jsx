import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeSideBar from './EmployeeSideBar';

export default function MyDeliveries2() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <EmployeeSideBar />
                <div className="container"> 
                    <h1 className="text-center text-warning pt-5 mb-5">ENVÍOS</h1>   
                    <div className="d-flex">
                        <table className="table table-bordered table-hover">
                            <thead className="table-success">
                                <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Dirección</th>
                                <th>Fecha de Entrega</th>
                                <th>Guía</th>
                                <th>Cuidad</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>calle 12#10-2</td>
                                <td>12/04/2021</td>
                                <td>32345</td>
                                <td>Cali</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Cra 34#15-9</td>
                                <td>12/04/2021</td>
                                <td>87968</td>
                                <td>Medellín</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Larry </td>
                                <td>Cr 10#11-23</td>
                                <td>30/05/2021 </td>
                                <td>67685</td>
                                <td>Cartagena</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div> 
                </div>        
            </div>    
           <Footer />
        </>
    )    
}
