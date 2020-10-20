import React, {Fragment, Component} from 'react';
import {Route} from 'react-router-dom';

// Dashboard Widgets

import calendar from "./Lista/";
//import clientesCreateUpdate from "./Crear/";
//import clientesUpdate from "./Editar/";

// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Calendario = ({ match }) => (
    <Fragment>
        <AppHeader />
        <div className="app-main">
            <AppSidebar />
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Mostrar calendario */}

                    <Route path={`${match.url}/lista`} component={calendar} />

                </div>
                <AppFooter />
            </div>
        </div>

    </Fragment>
);

export default Calendario;
