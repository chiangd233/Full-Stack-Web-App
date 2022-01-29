const router = require('express').Router();
const ctrl = require('../controllers/index');

router.get('/', ctrl.recipes.idx);

module.exports = router;