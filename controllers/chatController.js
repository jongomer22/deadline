const db = require("../models");

module.exports = {
    findChat: function (req, res) {
        console.log(req.query);
        db.Chat.find(req.query)
            .then(dbChat => {
                res.json(dbChat)
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Chat.create(req.body)
            .then(dbChat => res.json(dbChat))
            .catch(err => res.status(422).json(err));
    },
};