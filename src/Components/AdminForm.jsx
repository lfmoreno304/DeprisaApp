import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'
export default function AdminForm() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <SideBar />
                <div className="container">
                    <h1 className="text-center text-warning pt-5 mb-5">Gestion de usuarios</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="text-center text-warning pt-5 mb-5">Nuevo registro</h1>
                   <form>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" name="" id="" placeholder="nombre" />
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" name="" id="" placeholder="password" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" name="" id="" placeholder="email" />
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" name="" id="" placeholder="identificacion" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" name="" id="" placeholder="ciudad" />
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" name="" id="" placeholder="direccion" />
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-2 mx-auto pb-3 pt-4  mb-3">
                            <button type="submit" className="btn btn-primary ">Registrar</button>
                        </div>
                   </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
