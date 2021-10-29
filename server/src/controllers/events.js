const { response } = require('express');

const getEvents = (req, res = response ) => {

    res.json({
        ok:true,
        msg: 'getEvents'
    });
}
const createEvents = (req, res = response ) => {

    res.json({
        ok:true,
        msg: 'createEvents'
    });
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