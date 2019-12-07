const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    projectId: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String },
    date: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;