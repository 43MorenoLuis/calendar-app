import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';

export const eventStartAddNew = ( event ) => {
    return async( dispatch, getState ) => {
        
        const { uid, name } = getState().auth;
        
        try {
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();

            if( body.ok ){
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name: name
                }

                dispatch( eventAddNew( event ) );
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({ type: types.eventDeleted });

export const eventStartLoading = () => {
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();

            const events = prepareEvents(body.events);
            dispatch( eventLoaded( events ) );

        } catch (error) {
            console.log(error);
        }
    }
}

const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
})
