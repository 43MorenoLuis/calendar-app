import moment from "moment";
import { types } from "../types/types";

const initialState = {
    events: {
        title: 'Crear una web app calendario',
        start: moment().toDate(),
        end: moment().add( 2, 'hours' ).toDate(),
        bgcolor: '#fafafa',
        notes: 'Mirar algun curso',
        user: {
            _id: '1234',
            name: 'MorenoLuis'
        }
    },
    activeEvent: {
        
    }
};

export const calendarReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
    
        default:
            return state;
    }
}