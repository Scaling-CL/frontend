import React, { Fragment, Component } from 'react'

import PageTitle from '../../../Layout/AppMain/PageTitle';

import ClientesService from '../clientesService';

const clientesService = new ClientesService();

export default class clientesUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        if (params && params.id) {
            clientesService.getCliente(params.id).then((c) => {
                this.refs.nombres.value = c.nombres;
                this.refs.apellidos.value = c.apellidos;
                this.refs.email.value = c.email;
                this.refs.telefono.value = c.telefono;
                this.refs.direccion1.value = c.direccion1;
                this.refs.direccion2.value = c.direccion2;
            })
        }
    }
    handleUpdate(id) {
        clientesService.updateCliente(
            {
                "nombres": this.refs.nombres.value,
                "apellidos": this.refs.apellidos.value,
                "email": this.refs.email.value,
                "telefono": this.refs.telefono.value,
                "direccion1": this.refs.direccion1.value,
                "direccion2": this.refs.direccion2.value
            }, id
        ).then((result) => {
            alert("Cliente actualizado!");
        }).catch(() => {
            alert('No se pudo actualizar el cliente.');
        });
    }
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        }
        else {
            alert('No se pudo actualizar el cliente.');
        }
        event.preventDefault();
    }
    handleButtonRedirect(e) {
        window.location.href = "/#/clientes/lista/";
    }
    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Editar cliente"
                    icon="pe-7s-graph text-success"
                    buttonredirection={<button className="btn btn-primary" onClick={(e) => this.handleButtonRedirect(e)}>Ver clientes</button>}
                />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            First Name:</label>
                        <input className="form-control" type="text" ref='nombres' />

                        <label>
                            Last Name:</label>
                        <input className="form-control" type="text" ref='apellidos' />

                        <label>
                            Phone:</label>
                        <input className="form-control" type="text" ref='telefono' />

                        <label>
                            Email:</label>
                        <input className="form-control" type="text" ref='email' />

                        <label>
                            Address:</label>
                        <input className="form-control" type="text" ref='direccion1' />

                        <label>
                            Description:</label>
                        <input className="form-control" type="text" ref='direccion2' />


                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </Fragment>
        );
    }
}
