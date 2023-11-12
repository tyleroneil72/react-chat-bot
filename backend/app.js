const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { exec } = require("child_process");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const app = express();
const BACKEND_PORT = process.env.EXPRESS_PORT; // This is the port that the backend server will run on
const FRONTEND_PORT = process.env.VITE_PORT; // This is the port that the frontend server will run on

app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

app.use(routes); // Use the routes defined in backend/routes/index.js

app.use(express.static(path.join(__dirname, "..", "frontend")));
// This is the route that will serve the frontend
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});
// This is the port that the backend server will run on
const server = app.listen(BACKEND_PORT, function () {
  console.log(`Express Server running at http://127.0.0.1:${BACKEND_PORT}/`);
  exec(`open http://localhost:${FRONTEND_PORT}/`); // Open the frontend in the browser
});
