const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/")
    .get(profileController.findAll)
    .post(profileController.create);

router
    .route("/:id")
    .get(profileController.findById)
    .put(profileController.update)
    .delete(profileController.remove);

router
    .route("/newproj/:username")
    .put(profileController.addProj);
router
    .route("/note/:username")
    .put(profileController.addNote);
router
    .route("/setnotes/:username")
    .put(profileController.setNotes);

module.exports = router;