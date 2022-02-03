const db = require("../models")

//Rest Routes
/*
Create/new - POST - /recipes - receive data from new route to create an article
Edit - GET - /recipes/:id/edit - allow to edit a form
Show - GET - /recipes/:id - present an existing recipe
Index - GET - /recipe - Show all recipes
*/

// Index
const idx = (req, res) => {
    db.Recipe.find({}, (err, foundRecipes) => {
        if (err) res.send(err);
        const context = {recipes: foundRecipes};
        res.render("recipes/index", context)
    });
};

// New
const newRecipe = (req, res) => {
    db.Recipe.find({},(err, foundRecipe) =>{
        if(err) res.send(err);
        const context = {recipes: foundRecipe};
        res.render('recipes/new', context)
    })
};

// Create
const createRecipe = (req, res) => {
    db.Recipe.create(req.body, (err, createRecipe) => {
        if(err) return res.send(err);
        res.redirect('/recipes');
    })
}

// Show
const show = (req, res) => {
    db.Recipe.findbyId(req.params.id)
        .populate("recipes")
        .exec((err, foundRecipe) => {
            if (err) res.send(err);
            const context = {recipes: foundRecipes};
            res.render("recipes/show", context)
        })
}

//Edit
const edit = (req, res) => {
    db.Recipe.findbyId(req.params.id, (err, foundRecipe) => {
        if (err) res.send(err);
        const context = {recipes: foundRecipes};
        res.render("recipes/edit", context)
    });
};

// Update
const update = (req, res) => {
    db.Recipe.findbyIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        {new: true},
        (err, updatedRecipe) => {
            if(err) res.send(err);
            res.redirect(`/recipes/${updatedRecipe._id}`);
        }
    );
};

//Delete
const destroy = (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
        if(err) res.send(err);
        res.redirect('/recipes');
    });
};


module.exports = {
    idx,
    newRecipe,
    show,
    edit,
    update,
    createRecipe,
    deleteRecipe: destroy,
}