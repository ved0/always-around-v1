import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import multer from "multer";
import { deleteVideo, listVideos } from "./api/apiHandler.js";
import cookieParser from "cookie-parser";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("view engine", "pug");
app.set("views", "./templates");
app.use("/static", express.static("./static"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./static/videos/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("index");
})

app.get("/login", (req, res) => {
  if (req.cookies.session === undefined) {
    res.render("login");
  } else {
    res.redirect("/admin");
  }
});

app.get("/admin", async (req, res) => {
  if (req.cookies.session === undefined) {
    res.status(401).render("unauthorized");
  } else {
    const decoded = JWT.verify(req.cookies.session, process.env.SIGN_KEY);
    if (decoded.username === process.env.ADMIN_USERNAME) {
      const moviePaths = await listVideos("all");
      const movieList = moviePaths.map(
        (movie) => (movie = movie.split("/").pop())
      );

      res.status(200).render("admin", { movieList });
    } else {
      res.status(401).render("unauthorized");
    }
  }
});

app.post("/api/upload", upload.single("video"), async (req, res) => {
  if (req.cookies.session === undefined) {
    res.status(401).render("unauthorized");
  } else {
    res.status(200).send();
  }
});

app.delete("/api/delete", async (req, res) => {
  const movieName = req.query.movie.split("/").pop();
  const isDeleted = await deleteVideo(movieName);
  if (!!isDeleted) {
    res.status(200).send({
      message: "File is deleted.",
    });
  } else {
    res.status(500).send({
      message: "Could not delete the file, " + movieName,
    });
  }
});

app.get("/api/logout", async (req, res) => {
  if (req.cookies.session === undefined) {
    res.render("unauthorized");
  } else {
    res.clearCookie("session");
    res.status(200).send();
  }
});

app.get("/api/videos", async (req, res) => {
  res.json(await listVideos(req.query.category));
});

app.post("/api/login", async (req, res) => {
  if (
    req.body.username === process.env.ADMIN_USERNAME &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    const sessionData = {
      username: req.body.username,
    };
    const signedContent = JWT.sign(sessionData, process.env.SIGN_KEY);
    res.cookie("session", signedContent, {
      maxAge: 60 * 30 * 1000,
      httpOnly: true,
      path: "/",
    });
    res.status(200).send();
  } else {
    res.status(401).send({ message: "Invalid credentials!" });
  }
});

export default app;
