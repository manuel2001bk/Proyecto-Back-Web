var express = require('express');
var router = express.Router();
const rolesService = require('../controllers/rolesService')

router.get('/getRolId/:idRol', rolesService.getRolId);
router.get('/getAllRoles', rolesService.getAllRoles);
router.post('/addRol',rolesService.addRol);

module.exports = router;