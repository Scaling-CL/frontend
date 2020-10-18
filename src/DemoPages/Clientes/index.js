import React, {Fragment, Component} from 'react';
import {Route} from 'react-router-dom';

// Dashboard Widgets

import clientesList from "./Lista/";
import clientesCreateUpdate from "./Crear/";
import clientesUpdate from "./Editar/";

// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Clientes = ({ match }) => (
    <Fragment>
        <AppHeader />
        <div className="app-main">
            <AppSidebar />
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Mostrar clientes */}

                    <Route path={`${match.url}/lista`} component={clientesList} />

                    {/* Crear cliente */}

                    <Route path={`${match.url}/crear`} component={clientesCreateUpdate} />

                    {/* Editar cliente */}

                    <Route path={`${match.url}/editar/:id`} component={clientesUpdate} />
                </div>
                <AppFooter />
            </div>
        </div>

    </Fragment>
);

export default Clientes;