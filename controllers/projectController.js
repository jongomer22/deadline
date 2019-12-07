const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Project
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Project
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Project
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addModule: function (req, res) {
        console.log(req.params.id);
        console.log(req.body);
        db.Project
            .findOneAndUpdate({ _id: req.params.id }, { $push: { modules: req.body } }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Project
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateModule: function (req, res) {
        db.Project
            // .find({ _id: req.params.id }, { modules: { $elemMatch: { _id: req.params.modid } } })
            .update({ _id: req.params.id, 'modules._id': req.params.modid }, { $set: { 'modules.$.complete': true } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteModule: function (req, res) {
        db.Project
            .findOneAndUpdate({ _id: req.params.id }, { $pull: { modules: { _id: req.params.modid } } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Project
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
