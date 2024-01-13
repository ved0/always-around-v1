import express from "express";
import cors from "cors";

const app = express();

app.set("view engine", "pug");
app.set("views", "./templates");
app.use("/static", express.static("./static"));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/videos", (req, res) => {
  console.log(req.query.category);
  console.log("kommer han hit");
  const videoUrls = [
    'http://localhost:5080/static/videos/nummer1.mp4',
    'http://localhost:5080/static/videos/nummer2.mp4',
    'http://localhost:5080/static/videos/nummer3.mp4'
    // Add more video URLs as needed
  ];
  res.json(videoUrls);
});

export default app;