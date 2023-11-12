const express = require("express");
const { handleMessage } = require("../controllers/messageController");

const router = express.Router();

// Define a POST route for "/message" that uses the handleMessage function when accessed
router.post("/message", handleMessage);

module.exports = router;
