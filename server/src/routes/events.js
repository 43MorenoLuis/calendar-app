/*
    Rutas de Eventos / Events
    host + /api/event
*/
const { getEvents, createEvents, updateEvents, deleteEvents } = require("../controllers/events");
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

const router = Router();
// Todas tienen que pasar por la validacion del JWT
router.use( validateJWT );

// Obtener eventos
router.get('/', getEvents);

// Crear Eventos
router.post('/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validateFields
    ],createEvents);

// Actualizar Eventos
router.put('/:id', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validateFields
    ],updateEvents);

// Eliminar Eventos
router.delete('/:id', deleteEvents);

module.exports = router;