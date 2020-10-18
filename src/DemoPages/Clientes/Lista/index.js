import React, { Fragment, Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import ClientesService from '../clientesService';

const clientesService = new ClientesService();

export default class clientesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
            nextPageURL: ''
        };
        this.nextPage = this.nextPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        var self = this;
        clientesService.getClientes().then(function (result) {
            self.setState({ clientes: result.data, nextPageURL: result.nextlink })
        });
    }
    handleDelete(e, id) {
        var self = this;
        clientesService.deleteCliente({ id: id }).then(() => {
            var newArr = self.state.clientes.filter(function (obj) {
                return obj.id !== id;
            });
            self.setState({ clientes: newArr })
        });
    }
    handleRedirect(e, id) {
        window.location.href = "/#/clientes/editar/" + id;
    }
    handleButtonRedirect(e) {
        window.location.href = "/#/clientes/crear/";
    }
    nextPage() {
        var self = this;
        clientesService.getClientesByURL(this.state.nextPageURL).then((result) => {
            self.setState({ clientes: result.data, nextPageURL: result.nextlink })
        });
    }
    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Clientes"
                    icon="pe-7s-graph text-success"
                    buttonredirection={<button className="btn btn-primary" onClick={(e) => this.handleButtonRedirect(e)}>Crear cliente</button>}
                />
                <div className="clientes--list">
                    <table className="table">
                        <thead key="thead">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clientes.map(c =>
                                <tr key={c.id}>
                                    <td>{c.id}  </td>
                                    <td>{c.nombres}</td>
                                    <td>{c.apellidos}</td>
                                    <td>{c.telefono}</td>
                                    <td>{c.email}</td>
                                    <td>{c.direccion1}</td>
                                    <td>{c.direccion2}</td>
                                    <td>
                                        <Button className="mb-2 mr-2" color="success" onClick={(e) => this.handleRedirect(e, c.id)}>Editar</Button>
                                        <Button className="mb-2 mr-2" color="danger" onClick={(e) => this.handleDelete(e, c.id)}>Borrar</Button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={this.nextPage}>Siguiente página</button>
                </div>
            </Fragment>
        );
    }
}
