import React, { useState } from 'react';
import NavBar from '../ui/NavBar';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { messages } from '../../helpers/calendar-messages';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

moment.locale('es');

const events = [{
    title: 'Crear una web app calendario',
    start: moment().toDate(),
    end: moment().add( 2, 'hours' ).toDate(),
    bgcolor: '#fafafa',
    notes: 'Mirar algun curso',
    user: {
        _id: '1234',
        name: 'MorenoLuis'
    }
}];

export default function CalendarScreen() {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView' || 'month'))
    const dispatch = useDispatch();

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }
    
    const onSelectEvent = (e) => {
       // console.log(e);
    }
    
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.0,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };

    return (
        <div className='calendar-screen'>
            <NavBar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventStyleGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                lastView={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
