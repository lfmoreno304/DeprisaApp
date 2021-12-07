import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

export default function MyDelivery() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <SideBar/>
                <div className="container"> 
                    <h1 className="text-center text-warning pt-5">MIS ENVÍOS</h1>   

                    <div className="d-flex">
                        <table class="table table-striped table-hover">
                            <thead className="border text-center">
                                <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Dirección</th>
                                <th>Fecha de Entrega</th>
                                <th>Guía</th>
                                </tr>
                            </thead>
                            <tbody className="border text-center">
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>calle 12#10-2</td>
                                <td>12/04/2021</td>
                                <td>32345</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Cra 34#15-9</td>
                                <td>12/04/2021</td>
                                <td>87968</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Larry </td>
                                <td>Cr 10#11-23</td>
                                <td>30/05/2021 </td>
                                <td>67685</td>
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
