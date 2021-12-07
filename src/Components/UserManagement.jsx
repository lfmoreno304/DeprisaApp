import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBarAdmin from './SideBarAdmin';
import axios from 'axios';
export default function UserManagement() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = "http://localhost:3004/users";
        axios.get(url).then(function (res) {
            setUsers(res.data);
            console.log("Ok", res.data)
        }).catch(function (err) {
            console.log("Error", err)
        })
    }, []);
    return (
        <>
            <Header />
            <div className="d-flex">
                <SideBarAdmin />
                <div className="container">
                    <h1 className="text-center text-warning pt-5 mb-5">Gestion de clientes</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ciudad</th>
                                <th scope="col">Direccion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return (
                                    <>
                                        <tr scope="row" key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.city}</td>
                                            <td>{user.adress}</td>
                                        </tr>
                                    </>
                                )
                            })}
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
