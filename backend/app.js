const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { exec } = require("child_process");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const app = express();
const BACKEND_PORT = process.env.EXPRESS_PORT;
const FRONTEND_PORT = process.env.VITE_PORT;

app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

app.get("/config", (req, res) => {
  res.json({ PORT: BACKEND_PORT });
});

const server = app.listen(BACKEND_PORT, function () {
  console.log(`Express Server running at http://127.0.0.1:${BACKEND_PORT}/`);
  exec(`open http://localhost:${FRONTEND_PORT}/`);
});
