const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {

    }
)

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;