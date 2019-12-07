import axios from "axios";

export default {

    getChat: function (id) {
        return axios.get("/api/chat", { params: { projectId: id } });
    },
    saveChat: function (chatData) {
        return axios.post("/api/chat", chatData);
    },
    getProjects: function () {
        return axios.get("/api/project");
    },
    getProject: function (id) {
        return axios.get("/api/project/" + id);
    },
    deleteProject: function (id) {
        return axios.delete("/api/project/" + id);
    },
    updateProject: function (id, data) {
        return axios.put("/api/project/" + id, data);
    },
    addProject: function (projData) {
        return axios.post("/api/project", projData);
    },
    addModule: function (id, modData) {
        return axios.put("/api/project/module/" + id, modData);
    },
    updateModule: function (id, modid, data) {
        return axios.put("/api/project/module/" + id + "/" + modid, data);
    },
    deleteModule: function (projId, modId) {
        return axios.delete("/api/project/module/" + projId + "/" + modId);
    },
    createUser: function (user) {
        return axios.post("/api/user/signup", user);
    },
    login: function (user) {
        return axios.post("/api/user/login", user);
    },
    findUsr: function (id) {
        return axios.get("/api/user/login/" + id);
    },
    logOut: function () {
        return axios.get("/api/user/logout");
    },
    getUsr: function () {
        return axios.get("/api/user/getusr");
    },
    createDevProfile: function (usrName) {
        return axios.post("/api/profile", usrName);
    },
    updateDevProfile: function (id, data) {
        return axios.put("/api/profile/" + id, data);
    },
    updateNewProj: function (username, projData) {
        return axios.put("/api/profile/newproj/" + username, projData);
    },
    getProfileData: function (usrName) {
        return axios.get("/api/profile/" + usrName);
    },
    saveProfileNote: function (usrName, note) {
        return axios.put("/api/profile/note/" + usrName, note);
    },
    setProfileNote: function (usrName, notes) {
        return axios.put("/api/profile/setnotes/" + usrName, notes);
    },
    getProfileUsers: function () {
        return axios.get("/api/profile");
    }

};