const express = require("express");
const session = require("express-session");
const app = express();
var http = require('http').createServer(app);
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3001;
const passport = require("./passport/passport");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

// Define API routes here
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbRegulate");
console.log("Connection state: " + mongoose.connection.readyState);

http.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
