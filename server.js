const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const Pusher = require("pusher");
const Multipart = require("connect-multiparty");
const path = require("path");

//User Auth
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const express = require("express");

const users = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 4000;

const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  // .connect(db, { useNewUrlParser: true })
  // .then(() => console.log("mongoDB successfully conencted"))
  // .catch(err => console.log(err));
  .connect(process.env.MONGODB_URI || "mongodb://localhost/triptips", {
    useCreateIndex: true,
    useNewUrlParser: true
  });
//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", () => () => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); //relative path
  });
}

//GraphQL Schema - User, Post, Query
let schema = buildSchema(`
      type User {
        id : String!
        nickname : String!
        avatar : String!
      }
      type Post {
          id: String!
          user: User!
          caption : String!
          image : String!
      }
      type Query{
        user(id: String) : User!
        post(user_id: String, post_id: String) : Post!
        posts(user_id: String) : [Post]
      }
    `);

//maps id to user object
//Useing inputed data until I connect to DB so I can see what it looks like
let userslist = {
  a: {
    id: "a",
    nickname: "amandaLuane",
    avatar: "https://i.imgur.com/44Z37E8.jpg"
  }
};
let postslist = {
  a: {
    a: {
      id: "a",
      user: userslist["a"],
      caption: "Tolmie Peak Fire Lookout, WA",
      image: "https://i.imgur.com/9HFge0U.jpg"
    },
    b: {
      id: "b",
      user: userslist["a"],
      caption: "Steven Pass Igloo Building",
      image: "https://i.imgur.com/4KIMxr2.jpg"
    },
    c: {
      id: "c",
      user: userslist["a"],
      caption: "Road to Crystal Mountain",
      image: "https://i.imgur.com/MOHuU6w.jpg"
    },
    d: {
      id: "d",
      user: userslist["a"],
      caption: "MT. Washburn Summit, Yellowstone",
      image: "https://i.imgur.com/78GhDJB.jpg"
    }
  }
};

//Resolver Fucntion - handles incoming query
//user & post - returns data that matches the criteria
//posts - returns all posts by the specific user
let root = {
  user: function({ id }) {
    return userslist[id];
  },
  post: function({ user_id, post_id }) {
    return postslist[user_id][post_id];
  },
  posts: function({ user_id }) {
    return Object.values(postslist[user_id]);
  }
};

//express app (incoming requests)
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

//configure the Pusher clint
let pusher = new Pusher({
  appId: "PUSHER_APP_ID",
  key: "PUSHER_APP_KEY",
  secret: "PUSHER_APP_SECRET",
  cluster: "PUSHER_CLUSTER",
  encrypted: true
});

// add Middleware
let multipartMiddleware = new Multipart();

// trigger add a new post
app.post("/newpost", multipartMiddleware, (req, res) => {
  // create a sample post
  let post = {
    user: {
      nickname: req.body.name,
      avatar: req.body.avatar
    },
    image: req.body.image,
    caption: req.body.caption
  };

  // trigger pusher event
  pusher.trigger("posts-channel", "new-post", {
    post
  });

  return res.json({ status: "Post created" });
});

//set application port
app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
