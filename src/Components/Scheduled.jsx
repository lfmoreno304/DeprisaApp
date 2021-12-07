import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EmployeeSideBar from './EmployeeSideBar';

export default function Scheduled() {
    
  return(
        <>
        <Header/>
        <div className="d-flex">
          <EmployeeSideBar/>
          <div className="container">
          <h1 className="text-center text-warning pt-5 mb-5">ENVÍOS PROGRAMADOS</h1>
          <div className="row row-cols-4 pb-4 pr-3 pl-auto">
            <input type="date" className="form-control m-auto"/>
            <input type="text" className="form-control m-auto" placeholder="Ciudad de Origen"/>
            <button className="btn btn-primary">Buscar</button>
          </div>
          <div className="container pb-3">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th scope="col">N° GUÍA</th>
                <th scope="col">DESCRIPCIÓN</th>
                <th scope="col">CLIENTE</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
            <tbody className="text-center">
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th>3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
          </div>
          </div>
        </div>
        
        
        <Footer/>
        </>
    )
}

