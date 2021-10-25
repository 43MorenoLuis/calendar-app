import React from 'react'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function CalendarApp() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
