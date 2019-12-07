const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Profile
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Profile
            .findOne({ dev_name: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Profile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Profile
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addProj: function (req, res) {
        console.log(req.params.username);
        console.log(req.body);
        db.Profile
            .findOneAndUpdate({ dev_name: req.params.username }, { $push: { projects: req.body } }, { new: true })
            // .findOneAndUpdate({ _id: "5d5b5ed07cb09c23486459de" }, { $push: { projects: req.body } }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addNote: function (req, res) {
        console.log(req.body);
        db.Profile
            .findOneAndUpdate({ dev_name: req.params.username }, { $push: req.body }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(dbModel => res.json(dbModel));
    },
    setNotes: function (req, res) {
        db.Profile
            .findOneAndUpdate({ dev_name: req.params.username }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Profile
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
