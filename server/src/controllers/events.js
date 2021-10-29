const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res = response ) => {

    const events = await Event.find().populate('user', 'name');

    res.json({
        ok:true,
        events
    });
}
const createEvents = async(req, res = response ) => {

    const event = new Event( req.body );

    try {
        
        event.user = req.uid;

        const eventSave = await event.save();

        res.status(500).json({
            ok: true,
            event: eventSave
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const updateEvents = async(req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        // Verificar si Id existe en BD
        const event = await Event.findById( eventId );

        if( !event ){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe'
            });
        }

        // Verificar si es el mismo usuario que guardo para modificar
        if( event.user.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso para editarlo'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdate = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );
        res.status(200).json({
            ok: true,
            event: eventUpdate
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const deleteEvents = async(req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        // Verificar si Id existe en BD
        const event = await Event.findById( eventId );

        if( !event ){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe'
            });
        }

        // Verificar si es el mismo usuario que guardo para eliminar
        if( event.user.toString() !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso para eliminar'
            });
        }

        await Event.findByIdAndDelete( eventId );
        res.status(200).json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports={
    getEvents,
    createEvents,
    updateEvents,
    deleteEvents    
}