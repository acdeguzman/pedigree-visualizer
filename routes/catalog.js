const express = require('express');
const router = express.Router();

//Require controller modules
const swine_controller = require('../controllers/swineController');

/***SWINE routes***/

//GET homepage
router.get('/', swine_controller.index);

//GET request for creating a Swine
router.get('/swine/create', swine_controller.swine_create_get);

//POST request for creating Swine
router.post('/swine/create', swine_controller.swine_create_post);

//GET request for deleting a Swine
router.get('/swine/:id/delete', swine_controller.swine_delete_get);

//POST request for deleting a Swine
router.post('/swine/:id/delete', swine_controller.swine_delete_post);

//GET request for updating a Swine
router.get('/swine/:id/update', swine_controller.swine_update_get);

//POST request for updating a Swine
router.post('/swine/:id/update', swine_controller.swine_update_post);

//GET request for one Swine
router.get('/swine/:id', swine_controller.swine_detail);

//GET request for list of all Swine
router.get('/swines', swine_controller.swine_list);

module.exports = router;