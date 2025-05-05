require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const session = require("express-session");

// middleware de traitement de donnée
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// se connecter au client
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // pour accepter l'utilisation des cookie
  })
);

// configuration des session
app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true si on utilise https
      httpOnly: true,
      maxAge: new Date().getTime() * 365 * 24 * 60 * 60, // dure 1 ans a partir de la date actuel
    },
  })
);

// appel de la fonction de connection à la base de donnée
connectDB();

// appel de mes routes via le middleware
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/posts", require("./routes/post.routes"));
app.use("/api/comments", require("./routes/comment.routes"));

app.listen(port, () => console.log(`serveur demarrer sur le port ${port}`));
