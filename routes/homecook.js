const router = require("express").Router();
const homecookCtrl = require('../controllers/homecook');
const recipeCtrl = require('../controllers/recipes');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.get("/homecook", isLoggedIn, homecookCtrl.index);

router.post("/recipe", isLoggedIn, recipeCtrl.newRecipe);

router.delete("/recipe/:id", isLoggedIn, recipeCtrl.deleteRecipe);

module.exports = router;
