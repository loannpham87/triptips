const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/users");
const posts = require("./routes/Posts");

const app = express();

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongoDB successfully connected"))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use("/api/posts", posts); 

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
    resonse.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));