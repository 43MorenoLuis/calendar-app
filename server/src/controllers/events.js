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
const updateEvents = (req, res = response ) => {

    res.json({
        ok:true,
        msg: 'updateEvents'
    });
}
const deleteEvents = (req, res = response ) => {

    res.json({
        ok:true,
        msg: 'deleteEvents'
    });
}

module.exports={
    getEvents,
    createEvents,
    updateEvents,
    deleteEvents    
}