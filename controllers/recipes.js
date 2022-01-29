const db = require('../models');

const idx = (req, res) => {
    res.render('index')
};

module.exports = {
    idx,
};