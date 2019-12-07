const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport/passport");

// Matches with "/api/user"
router.route("/login")

    .post(passport.authenticate("local"), userController.login);

router.route("/signup")
    .post(userController.create);

router.route("/login/:id")
    .get(userController.find);
router.route("/logout")
    .get((req, res) => { req.logout(), res.redirect("/") });
router.route("/getusr")
    .get(userController.getUsr);




module.exports = router;
