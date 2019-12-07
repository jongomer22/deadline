const router = require("express").Router();

const profileRoutes = require("./profile");
const projectRoutes = require("./project");
const userRoutes = require("./user");
const chatRoutes = require("./chat");

// routes
router.use("/profile", profileRoutes);
router.use("/project", projectRoutes);
router.use("/user", userRoutes);
router.use("/chat", chatRoutes);

module.exports = router;
