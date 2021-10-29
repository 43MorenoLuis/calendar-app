/*
    Rutas de Eventos / Events
    host + /api/event
*/
const { getEvents, createEvents, updateEvents, deleteEvents } = require("../controllers/events");
const { Router } = require('express');
const { validateJWT }=require('../middlewares/validate-jwt');

const router = Router();
// Todas tienen que pasar por la validacion del JWT
router.use( validateJWT );

// Obtener eventos
router.get('/', getEvents);

// Crear Eventos
router.post('/', createEvents);

// Actualizar Eventos
router.put('/:id', updateEvents);

// Eliminar Eventos
router.delete('/:id', deleteEvents);

module.exports = router;