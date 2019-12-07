const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    dev_name: { type: String, required: true },
    dev_skills: [{ type: String }],
    role: String,
    ph: String,
    linkedin: String,
    image: String,
    notes: [],
    projects: [{
        proj_name: String,
        proj_id: String
    }]
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;