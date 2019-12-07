const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/chat"
router.route("/")
    .get(chatController.findChat)
    .post(chatController.create);



module.exports = router;
