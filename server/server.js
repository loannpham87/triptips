const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const Pusher = require("pusher");
const Multipart = require("connect-multiparty");

const app = express();
const PORT = 4000;

const user = require("./routes/user");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.use(
  session({
    secret: "fraggle-rock",
    store: new MongoStore({ mongooseConnection: dbConnection}),
    resave: false,
    saveUninitialized: false
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/user", user);



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
        },

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
            image:
              "https://i.imgur.com/4KIMxr2.jpg"
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
    post: function({ user_id , post_id }) {
      return postslist[user_id][post_id];
    },
    posts: function({ user_id }){
      return Object.values(postslist[user_id]);
    }
  };


  //express app (incoming requests)
  // let app = express();
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
    appId: 'PUSHER_APP_ID',
    key: 'PUSHER_APP_KEY',
    secret: 'PUSHER_APP_SECRET',
    cluster: 'PUSHER_CLUSTER',
    encrypted: true
  });

     // add Middleware
     let multipartMiddleware = new Multipart();

     // trigger add a new post 
     app.post('/newpost', multipartMiddleware, (req,res) => {
       // create a sample post
       let post = {
         user : {
           nickname : req.body.name,
           avatar : req.body.avatar
         },
         image : req.body.image,
         caption : req.body.caption
       }
 
       // trigger pusher event 
       pusher.trigger("posts-channel", "new-post", { 
         post 
       });
 
       return res.json({status : "Post created"});
     });

     //set application port

 app.listen(PORT, () => {
   console.log(`App listening on PORT: ${PORT}`);
 })
