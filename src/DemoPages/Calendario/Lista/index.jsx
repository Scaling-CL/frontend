import React, { Fragment, Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import CalendarService from '../calendarService';

import FullCalendar from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'

const calendarService = new CalendarService();


export default class calendar extends React.Component {
  render() {
    return (
      <Fragment>
          <PageTitle
              heading="Calendario"
              icon="pe-7s-graph text-success"
              buttonredirection={<button className="btn btn-primary" onClick={(e) => this.handleButtonRedirect(e)}>Crear cliente</button>}
          />
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
      </Fragment>
    )
  }
}
