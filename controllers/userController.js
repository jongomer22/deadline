const db = require("../models");
var passport = require("../passport/passport");

module.exports = {
    login: function (req, res) {
        res.json(req.user);
    },
    find: function (req, res) {
        console.log(req.params.id);
        db.User.find(req.params.id)
            .then(dbChat => res.json(dbChat))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("creating user");
        db.User.create(req.body)
            .then(() => {
                res.redirect(307, "/api/user/login");
            })
            .catch(err => res.status(422).json(err));
    },
    logOut: function (req, res) {
        req.logout();
        res.redirect("/")
    },
    getUsr: function (req, res) {
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    }
};